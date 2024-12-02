package org.example.carreradecaballosm03uf5;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class ApuestasController {

    @FXML
    private Label apuestasLabel;


    // Método para mostrar las apuestas en la pantalla
    public void mostrarApuestas(String playerName, int playerBet, String playerPalo, String[] botNames, int[] botBets, String[] botPalos) {
        StringBuilder apuestasInfo = new StringBuilder();

        // Información del jugador humano
        apuestasInfo.append("Jugador: ").append(playerName)
                .append(", Apuesta: ").append(playerBet)
                .append(", Palo: ").append(playerPalo).append("\n");

        // Información de los bots
        for (int i = 0; i < botNames.length; i++) {
            apuestasInfo.append(botNames[i])
                    .append(", Apuesta: ").append(botBets[i])
                    .append(", Palo: ").append(botPalos[i]).append("\n");
        }

        // Mostrar la información en la etiqueta
        apuestasLabel.setText(apuestasInfo.toString());
    }

    public void onContinuarButtonClick(ActionEvent actionEvent) {

    }
}
