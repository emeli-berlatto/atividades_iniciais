<?php

class MinhaClasse {
    function ehBissexto ($ano) {
        return ($ano % 4 == 0 && $ano % 100 != 0) ||( $ano % 400 == 0);
    }
}


$minhaClasse = new MinhaClasse();
$resultado="O ano {$_GET['ano']} não eh bissexto";
if($minhaClasse->ehBissexto($_GET['ano'])){
    $resultado="O ano {$_GET['ano']} é bissexto";
}
echo($resultado);