<?php

class Exemplodeclasse {
    function saudacao($usuario) {
        echo("Olá " . $_GET['algo1'] . ", este é meu site!");
    }
}

$minhaClasse = new Exemplodeclasse();
$minhaClasse->saudacao($_GET['algo1']);
