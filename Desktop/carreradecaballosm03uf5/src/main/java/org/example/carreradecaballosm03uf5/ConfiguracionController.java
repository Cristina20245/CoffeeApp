package org.example.carreradecaballosm03uf5;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.scene.Node;
import javafx.scene.control.TextField;
import javafx.scene.control.Label;
import javafx.scene.control.ComboBox;

import java.io.IOException;

public class ConfiguracionController {

    @FXML
    private TextField playerNameField; // Campo para el nombre del jugador
    @FXML
    private TextField betField;       // Campo para las fichas a apostar
    @FXML
    private ComboBox<String> paloComboBoxField; // Campo ComboBox para el palo
    @FXML
    private Label feedbackLabel;      // Etiqueta para mostrar mensajes

    // Método para manejar el clic en el botón "Apostar"
    public void onApostarButtonClick(ActionEvent actionEvent) {
        String playerName = playerNameField.getText();
        String betAmount = betField.getText();
        String paloComboBox = paloComboBoxField.getValue();

        // Validación de campos vacíos
        if (playerName.isEmpty() || betAmount.isEmpty() || paloComboBox == null) {
            feedbackLabel.setText("Por favor, completa todos los campos.");
            return;
        }

        // Validación del nombre del jugador
        if (!playerName.matches("[a-zA-Z]+")) {
            feedbackLabel.setText("El nombre del jugador solo puede contener letras.");
            return;
        }

        // Validación de la apuesta
        int bet;
        try {
            bet = Integer.parseInt(betAmount);
            if (bet < 1 || bet > 100) {
                feedbackLabel.setText("La apuesta debe estar entre 1 y 100 fichas.");
                return;
            }
        } catch (NumberFormatException e) {
            feedbackLabel.setText("La apuesta debe ser un número válido.");
            return;
        }

        // Si todo es válido
        feedbackLabel.setText("Apuesta registrada, cargando apuestas...");

        try {
            // Generar apuestas para los bots
            String[] botNames = {"Bot 1", "Bot 2", "Bot 3"};
            int[] botBets = new int[botNames.length];
            String[] botPalos = new String[botNames.length];

            for (int i = 0; i < botNames.length; i++) {
                botBets[i] = (int) (Math.random() * 100) + 1; // Apuesta entre 1 y 100
                botPalos[i] = "Palo " + (i + 1); // Ejemplo de selección de palo para bots
            }

            // Cargar la pantalla de apuestas
            FXMLLoader loader = new FXMLLoader(getClass().getResource("Apuestas.fxml"));
            Scene scene = new Scene(loader.load());

            // Pasar los datos al controlador de la siguiente pantalla
            org.example.carreradecaballosm03uf5.ApuestasController apuestasController = loader.getController();
            apuestasController.mostrarApuestas(playerName, bet, paloComboBox, botNames, botBets, botPalos);

            // Mostrar la nueva pantalla
            Stage stage = (Stage) ((Node) actionEvent.getSource()).getScene().getWindow();
            stage.setScene(scene);
            stage.setTitle("Apuestas Realizadas");
            stage.show();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Método para manejar el clic en el botón "Salir"
    public void onExitButtonClick(ActionEvent actionEvent) {
        System.exit(0); // Cierra la aplicación
    }

    // Método para manejar el clic en el botón "Volver"
    public void onVolverButtonClick(ActionEvent actionEvent) {
        try {
            FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("hello-view.fxml"));
            Scene scene = new Scene(fxmlLoader.load());
            Stage stage = (Stage) ((Node) actionEvent.getSource()).getScene().getWindow();
            stage.setScene(scene);
            stage.setTitle("Carrera de Caballos");
            stage.show();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}



/*package org.example.carreradecaballosm03uf5;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.scene.Node;
import javafx.scene.control.TextField;
import javafx.scene.control.Label;
import javafx.scene.control.ComboBox;

import java.io.IOException;

public class ConfiguracionController {

    @FXML
    private TextField playerNameField; // Campo para el nombre del jugador
    @FXML
    private TextField betField;       // Campo para las fichas a apostar
    @FXML
    private ComboBox<String> paloComboBoxField; // Campo ComboBox para el palo
    @FXML
    private Label feedbackLabel;      // Etiqueta para mostrar mensajes

    // Método para manejar el clic en el botón "Apostar"
    public void onApostarButtonClick(ActionEvent actionEvent) {
        String playerName = playerNameField.getText();
        String betAmount = betField.getText();
        String paloComboBox = paloComboBoxField.getValue(); // Se usa getValue() para obtener el valor seleccionado

        // Validación de campos vacíos
        if (playerName.isEmpty() || betAmount.isEmpty() || paloComboBox == null) {
            feedbackLabel.setText("Por favor, completa todos los campos.");
            return;
        }

        // Validación del nombre del jugador (solo letras)
        if (!playerName.matches("[a-zA-Z]+")) {
            feedbackLabel.setText("El nombre del jugador solo puede contener letras.");
            return;
        }

        // Validación de la apuesta (solo números entre 1 y 100)
        try {
            int bet = Integer.parseInt(betAmount);
            if (bet < 1 || bet > 100) {
                feedbackLabel.setText("La apuesta debe estar entre 1 y 100 fichas.");
                return;
            }
        } catch (NumberFormatException e) {
            feedbackLabel.setText("La apuesta debe ser un número válido.");
            return;
        }

        // Si todo es válido
        feedbackLabel.setText("Jugador: " + playerName + ", tu apuesta es de: " + betAmount + " fichas, con el Palo: " + paloComboBox);
        // Aquí puedes manejar la lógica para avanzar al siguiente paso.
    }

    // Método para manejar el clic en el botón "Salir"
    public void onExitButtonClick(ActionEvent actionEvent) {
        System.exit(0); // Cierra la aplicación
    }

    // Método para manejar el clic en el botón "Volver"
    public void onVolverButtonClick(ActionEvent actionEvent) {
        try {
            // Cargar el FXML de la pantalla principal
            FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("hello-view.fxml"));
            Scene scene = new Scene(fxmlLoader.load());

            // Obtener el Stage actual desde el evento
            Stage stage = (Stage) ((Node) actionEvent.getSource()).getScene().getWindow();
            stage.setScene(scene);
            stage.setTitle("Carrera de Caballos");
            stage.show();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
*/