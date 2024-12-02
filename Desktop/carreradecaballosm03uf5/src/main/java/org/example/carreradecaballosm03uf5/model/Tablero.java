package org.example.carreradecaballosm03uf5.model;

import java.util.HashMap;
import java.util.Map;
//comentario
public class Tablero {

    private Map<String, Integer> posicicionDeLosCaballos; // Almacena las posiciones de los caballos
    private final int longitudDeLasPistas = 10;

    // Constructor
    public Tablero() {
        this.posicicionDeLosCaballos = new HashMap<>();

        // Obtiene los valores de la enumeración CardSuit
        CardSuit[] suits = CardSuit.values();

        // Inicializa las posiciones con los símbolos de los caballos para cada CardSuit
        for (CardSuit suit : suits) {
            posicicionDeLosCaballos.put(suit.getDescription(), 0);
        }
    }

    // Método para mostrar el tablero
    // Muestra el estado actual del tablero (pista)
    public String getTableroString() {
        StringBuilder sb = new StringBuilder(); // Para construir visualmente la pista
        CardSuit[] suits = CardSuit.values(); // Obtiene todos los naipes (caballos)

        sb.append("----------------------------------------------------\n");

        for (CardSuit suit : suits) {
            String caballo = suit.getDescription(); // Nombre del caballo (naipe)
            int posicion = posicicionDeLosCaballos.get(caballo); // Posición actual del caballo
            StringBuilder pista = new StringBuilder(); // Para construir visualmente la pista

            // Construye la pista hasta la posición actual del caballo
            for (int i = 0; i < posicion && i < longitudDeLasPistas; i++) {
                pista.append("-"); // Añade '-' para indicar progreso en la pista
            }

            // Si el caballo alcanzó la última posición, coloca el caballo en la línea de meta
            if (posicion == longitudDeLasPistas) {
                pista.append(suit.getHorseSymbol()); // Coloca el caballo en la línea de meta
            } else {
                // Añade el símbolo del caballo en la posición actual si no ha terminado
                pista.append(suit.getHorseSymbol());
                // Completa la pista con '-' hasta el final
                while (pista.length() < longitudDeLasPistas) {
                    pista.append("-"); // Rellena con '-' hasta el largo de la pista
                }
                // Añade la línea de meta al final
                pista.append("🏁");
            }

            // Añade la representación del caballo y de la pista al StringBuilder
            sb.append(String.format("Caballo de %-10s %-20s Posición: %d%n", caballo, pista.toString(), posicion));
        }

        sb.append("----------------------------------------------------\n");
        return sb.toString(); // Retorna la representación del tablero
    }

    // Método para actualizar la posición de un caballo
    public void actualizarPosicion(CardSuit caballo, int avanza) {
        int nuevaPosicion = posicicionDeLosCaballos.get(caballo.getDescription()) + avanza;
        posicicionDeLosCaballos.put(caballo.getDescription(), nuevaPosicion);
    }

    // Método para obtener la posición de un caballo
    public int obtenerPosicion(CardSuit caballo) {
        return posicicionDeLosCaballos.getOrDefault(caballo.getDescription(), -1); // Retorna -1 si el caballo no se encuentra
    }

    // Método para obtener la longitud de las pistas
    public int getLongitudDeLasPistas() {
        return longitudDeLasPistas;
    }
}
