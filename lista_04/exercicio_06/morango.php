<?php

class MinhaClasse {
    function areaRetangulo($a, $b) {
        return $a * $b /2;
    }
}

$minhaClasse = new MinhaClasse();
echo("A área do retângulo é {$minhaClasse->areaRetangulo((float)$_GET['base'], (float)$_GET['altura'])}");