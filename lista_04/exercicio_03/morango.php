<?php

class MinhaClasse {
    function ehPar($a) {

            return !($a % 2);
    }
}

$minhaClasse = new MinhaClasse();
$resultado="O número {$_GET['a']} é ímpar";
if($minhaClasse->ehPar($_GET['a'])){
    $resultado="O número {$_GET['a']} é par";
}
echo($resultado);