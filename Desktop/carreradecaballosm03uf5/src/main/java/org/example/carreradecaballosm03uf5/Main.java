package org.example.carreradecaballosm03uf5;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;
import java.util.Objects;

public class Main extends Application { // Cambié el nombre de la clase a "Main"
    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(Main.class.getResource("hello-view.fxml"));
        Scene scene = new Scene(fxmlLoader.load());
        stage.setTitle("Carrera de Caballos");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}





/*package org.example.carreradecaballosm03uf5;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
import org.example.carreradecaballosm03uf5.Juego.Juego;

import java.io.IOException;
import java.util.Objects;

public class Main extends Application {

    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("hello-view.fxml"));
        Scene scene = new Scene(fxmlLoader.load());
        stage.setTitle("¡Carrera de Caballos!");
        stage.setScene(scene);
        //scene.getStylesheets().add(getClass().getResource("hello-view.css")).toExternalForm()); //esta hecha ahora probando

        scene.getStylesheets().add(Objects.requireNonNull(getClass().getResource("hello-view.css")).toExternalForm());

        stage.show();
    }
}*/

/*package org.example.carreradecaballosm03uf5;

import org.example.carreradecaballosm03uf5.Juego.Juego;

public class Main {
    public static void main(String[] args) {
        Juego juego = new Juego();
        juego.iniciarJuego(); //Inicia el juego
    }
}*/




/*package src;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.Parent;
import javafx.fxml.FXMLLoader;
import javafx.stage.Stage;

//import javafx.scene.control.Label;

import src.org.example.carreradecaballos.Juego.org.example.carreradecaballos.Juego;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("Hello World");
        Parent root = FXMLLoader.load(getClass().getResource("sample.fxml"));
        Scene scene = new Scene(root, 400, 200);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        // Inicializa el juego antes de lanzar la aplicación JavaFX
        org.example.carreradecaballos.Juego juego = new org.example.carreradecaballos.Juego();
        juego.iniciarJuego(); // Inicia el juego

        // Lanza la aplicación JavaFX
        launch(args);
    }
}


*/






