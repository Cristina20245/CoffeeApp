package org.example.carreradecaballosm03uf5.model;

public abstract class Card {
    protected CardSuit suit; // Palo de la carta
    protected float value; // Valor de la carta

    protected String toString(String numberOrFace) {
        return String.format("%7s de %6s, valor %.1f", numberOrFace, suit, value); // Formato de la representación de la carta
    }

    public CardSuit getSuit() {
        return suit; // Retorna el palo de la carta
    }

    // Método abstracto para obtener una descripción de la carta
    public abstract String getDescription();
}
