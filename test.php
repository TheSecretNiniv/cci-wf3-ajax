<?php


$nom = isset($_GET['nom']) ? $_GET['nom'] : "Pas de nom";


echo "Coucou ".$nom."!";