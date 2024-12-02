package org.example.carreradecaballosm03uf5;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.scene.Parent;
import javafx.application.Platform;

import java.io.IOException;

public class HelloController {
    @FXML
    private Label welcomeText;

    // Método para manejar el clic en "Jugar" y cambiar a la pantalla de configuración
    @FXML
    protected void onJugarButtonClick() throws IOException {
            FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("configuracion.fxml"));
            Parent root = fxmlLoader.load();
            Stage stage = (Stage) welcomeText.getScene().getWindow();
            stage.setScene(new Scene(root));
    }


    // Método para manejar el clic en "Salir"
    @FXML
    protected void onExitButtonClick() {
        Platform.exit();  // Cierra la aplicación de manera segura
        System.exit(0);   // Termina el proceso Java
    }
}



/*package org.example.carreradecaballosm03uf5;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.application.Platform;

public class HelloController {
    @FXML
    private Label welcomeText;

    @FXML
    protected void onHelloButtonClick() {
        welcomeText.setText("Welcome to JavaFX Application!");
    }

    // Método para salir de la aplicación
    @FXML
    protected void onExitButtonClick() {
        Platform.exit();  // Cierra la aplicación de manera segura
        System.exit(0);   // Termina el proceso Java
    }

}*/