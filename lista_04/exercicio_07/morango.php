<?php

class MinhaClasse {
    function areaCirculo($a) {
        return $a * $a * pi();
    }
}

$minhaClasse = new MinhaClasse();
echo("A área do círculo é {$minhaClasse->areaCirculo((float)$_GET['raio'])}");