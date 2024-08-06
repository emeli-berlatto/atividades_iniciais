<?php

class MinhaClasse {
    function areaQuadrado($a, $b) {
        return $a * $b;
    }
}

$minhaClasse = new MinhaClasse();
echo("A área do quadrado é {$minhaClasse->areaQuadrado((float)$_GET['base'], (float)$_GET['altura'])}");