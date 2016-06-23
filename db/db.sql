create database if not exists appet;

use appet;

CREATE TABLE `notificacao` (
  `id` int(5) unsigned NOT NULL AUTO_INCREMENT,
  `id_animal` int(5) unsigned DEFAULT NULL,
  `nome` varchar(120) NOT NULL,
  `raca` varchar(120) NOT NULL,
  `cor` varchar(120) NOT NULL,
  `porte` varchar(120) NOT NULL,
  `data_desaparecimento` datetime NOT NULL,
  `local_desaparecimento` varchar(120) NOT NULL,
  `telefone` varchar(120) NOT NULL,
  `recompensa` tinyint(1) unsigned DEFAULT '0',
  `idade_ano` varchar(2) DEFAULT NULL,
  `idade_mes` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
