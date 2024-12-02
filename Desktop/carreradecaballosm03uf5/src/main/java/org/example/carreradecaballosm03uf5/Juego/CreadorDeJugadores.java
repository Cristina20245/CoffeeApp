package org.example.carreradecaballosm03uf5.Juego;

import org.example.carreradecaballosm03uf5.model.CardSuit;
import org.example.carreradecaballosm03uf5.model.Jugador;
import org.example.carreradecaballosm03uf5.model.JugadorBot;
import org.example.carreradecaballosm03uf5.model.JugadorHumano;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class CreadorDeJugadores {
    private static Scanner input = new Scanner(System.in);

    /**
     * Crea jugadores (un jugador humano y tres bots).
     */
    public static Jugador[] crearJugadores() {
        // Crea el jugador humano
        Jugador jugadorHumano = crearJugadorHumano();

        // Lista de los palos del enum CardSuit
        List<CardSuit> palosNaipes = new ArrayList<>();
        Collections.addAll(palosNaipes, CardSuit.values()); // Añade todos los palos de CardSuit

        // Remueve el palo elegido por el jugador humano para evitar duplicados en los bots
        palosNaipes.remove(jugadorHumano.getPalo());

        // Mezcla los palos restantes para asignarlos aleatoriamente a los bots
        Collections.shuffle(palosNaipes);

        // Crea un array para almacenar el jugador humano y 3 bots
        Jugador[] jugadores = new Jugador[4];
        jugadores[0] = jugadorHumano; // El jugador humano se queda en la primera posición

        // Crea bots usando el nuevo metodo, y con los nombres de bots
        String[] nombresBots = {"Bot1", "Bot2", "Bot3"};
        for (int i = 1; i <= 3; i++) {
            jugadores[i] = crearJugadorBot(nombresBots[i - 1], palosNaipes.get(i - 1)); // Asigna palo y ficha aleatoria al bot
        }

        System.out.println("------------------------------------------");
        System.out.println("RESUMEN DE LA PARTIDA:");
        // Muestra los detalles finales de todos los jugadores en la primera tabla antes de jugar
        for (Jugador jugador : jugadores) {
            System.out.println(jugador.getDescription());
        }
        System.out.println("------------------------------------------");
        return jugadores;
    }

    /**
     * Método para crear el jugador humano.
     */
    public static Jugador crearJugadorHumano() {
        String nombreJugador = solicitarNombre(); // Pide al usuario el nombre
        CardSuit palo = seleccionarPalo(); // Pide al usuario seleccionar el palo
        int fichas = solicitarFichas(); // Pide al usuario cuántas fichas quiere apostar

        return new JugadorHumano(nombreJugador, palo, fichas); // Retorna el nuevo jugador creado con la información recolectada
    }

    /**
     * Método para crear un jugador bot.
     */
    public static Jugador crearJugadorBot(String nombre, CardSuit palo) {
        return new JugadorBot(nombre, palo); // Crea un bot con el nombre y palo
    }

    // Métodos para solicitar información al jugador humano
    private static String solicitarNombre() {
        String nombreJugador = "";
        while (nombreJugador.isEmpty() || !nombreJugador.matches("[a-zA-Z\\s]+")) {
            System.out.println("¿Cuál es tu nombre?");
            nombreJugador = input.nextLine().trim();
            if (nombreJugador.isBlank()) {
                System.out.println("El nombre no puede estar vacío. Por favor, introduce tu nombre.");
            } else if (!nombreJugador.matches("[a-zA-Z\\s]+")) {
                System.out.println("El nombre no puede contener caracteres numéricos ni especiales. Por favor, introduce tu nombre.");
            }
        }
        return nombreJugador; // Retorna el nombre ingresado del jugador humano
    }

    private static CardSuit seleccionarPalo() {
        CardSuit paloHumano = null;

        while (paloHumano == null) {
            System.out.println("\nIntroduce el número del palo con el que quieres jugar:");
            System.out.println("[1] Palo de Oros");
            System.out.println("[2] Palo de Espadas");
            System.out.println("[3] Palo de Copas");
            System.out.println("[4] Palo de Bastos");

            if (input.hasNextInt()) {
                int eleccionPalo = input.nextInt();
                input.nextLine();

                switch (eleccionPalo) {
                    case 1:
                        paloHumano = CardSuit.GOLD; // Palo de Oros
                        break;
                    case 2:
                        paloHumano = CardSuit.SWORDS; // Palo de Espadas
                        break;
                    case 3:
                        paloHumano = CardSuit.CUPS; // Palo de Copas
                        break;
                    case 4:
                        paloHumano = CardSuit.CLUBS; // Palo de Bastos
                        break;
                    default:
                        System.out.println("Opción inválida. Por favor selecciona de 1 a 4.");
                }
            } else {
                System.out.println("Opción inválida. Debes introducir un valor numérico.");
                input.nextLine();
            }
        }

        return paloHumano; // Retorna el palo seleccionado
    }

    private static int solicitarFichas() {
        int fichasHumano = 0;

        while (fichasHumano <= 0 || fichasHumano > 100) {
            System.out.println("\n¿Cuántas fichas quieres apostar? (Debe ser entre 1 y 100 fichas)");

            if (input.hasNextInt()) {
                fichasHumano = input.nextInt();
                input.nextLine();

                if (fichasHumano > 0 && fichasHumano <= 100) {
                    System.out.println("Has apostado " + fichasHumano + " fichas.");
                } else {
                    System.out.println("El número de fichas debe ser mínimo 1 y máximo 100.");
                }
            } else {
                System.out.println("Opción inválida. Debes introducir un valor numérico.");
                input.nextLine();
            }
        }
        return fichasHumano; // Retorna el número de fichas apostadas
    }
}

