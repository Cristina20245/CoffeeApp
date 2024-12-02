module org.example.carreradecaballosm03uf5 {
    requires javafx.controls;
    requires javafx.fxml;


    opens org.example.carreradecaballosm03uf5 to javafx.fxml;
    exports org.example.carreradecaballosm03uf5;
}