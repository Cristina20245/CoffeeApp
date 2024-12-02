package org.example.carreradecaballosm03uf5.Juego;

import org.example.carreradecaballosm03uf5.model.Card;
import org.example.carreradecaballosm03uf5.model.CardsDeck;
import org.example.carreradecaballosm03uf5.model.Jugador;
import org.example.carreradecaballosm03uf5.model.Tablero;

import java.util.*;

public class Juego {
    private Tablero tablero; // Tablero del juego
    private Jugador[] jugadores; // Array de jugadores
    private static Scanner input = new Scanner(System.in);
    private MovimientosCaballo movimientosCaballo; // Instancia de Movimientos Caballo

    public void iniciarJuego() {
        boolean exit = false; // Controla el bucle del menú principal

        do {
            System.out.println("\nBIENVENID@ AL JUEGO DE CARRERA DE CABALLOS\n");
            System.out.println("Por favor elige qué quieres hacer:");
            System.out.println("[1] Jugar");
            System.out.println("[0] Salir");

            if (input.hasNextInt()) {
                int menu = input.nextInt();
                input.nextLine();

                switch (menu) {
                    case 1:
                        // Inicializa jugadores
                        jugadores = CreadorDeJugadores.crearJugadores();
                        if (jugadores == null || jugadores.length == 0) {
                            System.out.println("No se han creado jugadores. Saliendo del juego.");
                            return;
                        }
                        tablero = new Tablero(); // Inicializar el tablero
                        movimientosCaballo = new MovimientosCaballo(tablero); // Inicializa MovimientosCaballo
                        jugar(); // Inicia la lógica del juego
                        break;
                    case 0:
                        System.out.println("Salir");
                        exit = true;
                        break;
                    default:
                        System.out.println("Opción inválida. Por favor selecciona 1 o 0.");
                }
            } else {
                System.out.println("Opción inválida. Debes ingresar un valor numérico.");
                input.nextLine();
            }
        } while (!exit);
    }

    /**
     * Gestiona las rondas del juego, sacando cartas y moviendo caballos
     */
    public void jugar() {
        CardsDeck baraja = new CardsDeck();
        CardsDeck barajaSinReyes = baraja.filterNumeredCards();
        int ronda = 1;

        System.out.println("Presiona Enter para empezar el juego...");
        input.nextLine();

        while (true) {
            System.out.println("Ronda " + ronda);

            Card cartaSacada = barajaSinReyes.getCardFromDeck();
            if (cartaSacada == null) {
                System.out.println("No hay más cartas en la baraja.");
                System.out.println("¿Deseas barajar las cartas de nuevo? (1 para Sí, 2 para No)");

                int eleccion = input.nextInt();
                input.nextLine();

                if (eleccion == 1) {
                    barajaSinReyes.barajar();
                    System.out.println("Barajando...");
                    continue;
                } else if (eleccion == 2) {
                    System.out.println("Fin del juego. Gracias por jugar.");
                    break;
                } else {
                    System.out.println("Opción inválida. Por favor selecciona 1 o 2.");
                    continue;
                }
            }

            System.out.println("El crupier ha sacado: " + cartaSacada.getDescription());

            if (ronda % 5 == 0) {
                movimientosCaballo.retrocederCaballo(cartaSacada);
            } else {
                movimientosCaballo.avanzarCaballo(cartaSacada);
            }

            mostrarTablero(); // Llama al método para mostrar el tablero después de cada jugada

            if (verificarGanador(jugadores)) {
                return;
            }

            System.out.println("Presiona Enter para continuar a la siguiente ronda...");
            input.nextLine();

            ronda++;
        }
    }

    /**
     * Comprueba si hay un ganador entre los jugadores.
     *
     * @param jugadores Array de jugadores.
     * @return true si hay un ganador, false en caso contrario.
     */
    private boolean verificarGanador(Jugador[] jugadores) {
        for (Jugador jugador : jugadores) {
            // Comprueba si el caballo del jugador ha llegado a la línea de meta
            if (tablero.obtenerPosicion(jugador.getPalo()) >= tablero.getLongitudDeLasPistas()) {
                // Muestra al ganador y el caballo con el que estaba jugando
                System.out.println("¡El ganador es: " + jugador.getNombre() + "! Jugando con el caballo " + jugador.getPalo().getDescription());

                // Suma todas las fichas (botes) de todos los jugadores
                int totalFichas = 0;
                for (Jugador j : jugadores) {
                    totalFichas += j.getFichas();
                }
                System.out.println("Total ganado por " + jugador.getNombre() + ": " + totalFichas + " fichas.");

                return true; // Termina el juego si hay un ganador
            }
        }
        return false; // No hay ganador todavía
    }


    public void mostrarTablero() {
        // Obtiene la representación del tablero e imprime
        String tableroRepresentacion = tablero.getTableroString();
        System.out.println(tableroRepresentacion);
    }
}
