package org.example.carreradecaballosm03uf5;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;
import java.util.Objects;

public class HelloApplication extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("hello-view.fxml"));
        Scene scene = new Scene(fxmlLoader.load());
        stage.setTitle("Hello!");
        stage.setScene(scene);
        //scene.getStylesheets().add(getClass().getResource("hello-view.css")).toExternalForm()); //esta hecha ahora probando
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}