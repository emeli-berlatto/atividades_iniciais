<?php

class MinhaClasse {
    function converteFahrenheitParaCelsius ($fahrenheit) {
        return ($fahrenheit - 32) * 5 / 9;;
    }
}

$minhaClasse = new MinhaClasse();
echo("A temperatura em celsius é {$minhaClasse->converteFahrenheitParaCelsius((float)$_GET['fahrenheit'])}");