-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Acompanhamento`
--

DROP TABLE IF EXISTS `Acompanhamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Acompanhamento` (
  `idAcompanhamento` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `valor` int NOT NULL,
  PRIMARY KEY (`idAcompanhamento`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Acompanhamento`
--

LOCK TABLES `Acompanhamento` WRITE;
/*!40000 ALTER TABLE `Acompanhamento` DISABLE KEYS */;
INSERT INTO `Acompanhamento` VALUES (1,'Batata Rustica Simples',21),(3,'Fritas Palito Simples',18),(4,'Fritas Palito Cheddar e Bacon',22),(6,'Fritas Palito Cheddar e Bacon',22);
/*!40000 ALTER TABLE `Acompanhamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bebida`
--

DROP TABLE IF EXISTS `Bebida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bebida` (
  `idBebida` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `valor` int NOT NULL,
  PRIMARY KEY (`idBebida`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bebida`
--

LOCK TABLES `Bebida` WRITE;
/*!40000 ALTER TABLE `Bebida` DISABLE KEYS */;
INSERT INTO `Bebida` VALUES (1,'Coca Cola',5),(2,'Guarana',5),(3,'Suco de Laranja',8);
/*!40000 ALTER TABLE `Bebida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Lanche`
--

DROP TABLE IF EXISTS `Lanche`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Lanche` (
  `idLanche` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `valor` int NOT NULL,
  PRIMARY KEY (`idLanche`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Lanche`
--

LOCK TABLES `Lanche` WRITE;
/*!40000 ALTER TABLE `Lanche` DISABLE KEYS */;
INSERT INTO `Lanche` VALUES (1,'Big Heat',22),(2,'Heat Burguer Simples',24),(3,'Heat Burguer Duplo',27),(4,'Heat Burguer Triplo',31);
/*!40000 ALTER TABLE `Lanche` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pedido`
--

DROP TABLE IF EXISTS `Pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Pedido` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `acompanhamento` varchar(45) DEFAULT NULL,
  `bebida` varchar(45) DEFAULT NULL,
  `pao` varchar(45) DEFAULT NULL,
  `valor` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPedido`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pedido`
--

LOCK TABLES `Pedido` WRITE;
/*!40000 ALTER TABLE `Pedido` DISABLE KEYS */;
INSERT INTO `Pedido` VALUES (1,'BATATA RUSTICA SIMPLES - R$ 21,00','COCA COLA - R$ 5,00','BIG HEAT - R$ 22,00','48'),(2,'FRITAS PALITO SIMPLES - R$ 18,00','SUCO DE LARANJA - R$ 8,00','HEAT BURGUER TRIPLO - R$ 31,00','TOTAL  -  R$ 57'),(3,'FRITAS PALITO CHEDDAR E BACON - R$ 22,00','GUARANA - R$ 5,00','HEAT BURGUER DUPLO - R$ 27,00','TOTAL  -  R$ 54'),(4,'FRITAS PALITO SIMPLES - R$ 18,00','SUCO DE LARANJA - R$ 8,00','HEAT BURGUER SIMPLES - R$ 24,00','TOTAL    =    R$ 50'),(5,'FRITAS PALITO SIMPLES - R$ 18,00','SUCO DE LARANJA - R$ 8,00','HEAT BURGUER SIMPLES - R$ 24,00','TOTAL    =    R$ 50'),(6,'FRITAS PALITO SIMPLES - R$ 18,00','SUCO DE LARANJA - R$ 8,00','HEAT BURGUER SIMPLES - R$ 24,00','TOTAL    =    R$ 50'),(7,'BATATA RUSTICA SIMPLES - R$ 21,00','COCA COLA - R$ 5,00','BIG HEAT - R$ 22,00','TOTAL    =    R$ 48'),(8,'BATATA RUSTICA SIMPLES - R$ 21,00','COCA COLA - R$ 5,00','BIG HEAT - R$ 22,00','TOTAL    =    R$ 48'),(9,'BATATA RUSTICA SIMPLES - R$ 21,00','COCA COLA - R$ 5,00','BIG HEAT - R$ 22,00','TOTAL    =    R$ 48'),(10,'BATATA RUSTICA SIMPLES - R$ 21,00','COCA COLA - R$ 5,00','BIG HEAT - R$ 22,00','TOTAL    =    R$ 48'),(11,'FRITAS PALITO CHEDDAR E BACON - R$ 22,00','SUCO DE LARANJA - R$ 8,00','HEAT BURGUER DUPLO - R$ 27,00','TOTAL    =    R$ 57'),(12,'FRITAS PALITO SIMPLES - R$ 18,00','GUARANA - R$ 5,00','HEAT BURGUER TRIPLO - R$ 31,00','TOTAL    =    R$ 54'),(13,'BATATA RUSTICA SIMPLES - R$ 21,00','COCA COLA - R$ 5,00','BIG HEAT - R$ 22,00','TOTAL    =     48'),(14,'BATATA RUSTICA SIMPLES - R$ 21,00','COCA COLA - R$ 5,00','BIG HEAT - R$ 22,00','TOTAL   =   R$ 48'),(15,'BATATA RUSTICA SIMPLES - R$ 21,00','COCA COLA - R$ 5,00','BIG HEAT - R$ 22,00','TOTAL   =   R$ 48'),(16,'BATATA RUSTICA SIMPLES - R$ 21,00','COCA COLA - R$ 5,00','BIG HEAT - R$ 22,00','TOTAL   =   R$ 48'),(17,'BATATA RUSTICA SIMPLES - R$ 21,00','COCA COLA - R$ 5,00','BIG HEAT - R$ 22,00','TOTAL   =   R$ 48'),(18,'BATATA RUSTICA SIMPLES - R$ 21,00','COCA COLA - R$ 5,00','BIG HEAT - R$ 22,00','TOTAL   =   R$ 48'),(19,'BATATA RUSTICA SIMPLES - R$ 21,00','COCA COLA - R$ 5,00','BIG HEAT - R$ 22,00','TOTAL   =   R$ 48');
/*!40000 ALTER TABLE `Pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuario`
--

DROP TABLE IF EXISTS `Usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(200) NOT NULL,
  `telefone` bigint NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuario`
--

LOCK TABLES `Usuario` WRITE;
/*!40000 ALTER TABLE `Usuario` DISABLE KEYS */;
INSERT INTO `Usuario` VALUES (1,'maira','mk@gmail.com','1234',16992450190),(2,'mairaok','mk2@gmail.com','1234',16992450190),(3,'mairaok','mk3@gmail.com','$2b$10$d0.RWObrUt5dZs.BhCPgtO2oWZZMDqRfkE3K.pyMqauyWwxDNtGuu',16992450190),(4,'mairaok','mk4@gmail.com','$2b$10$jVqTFCvZP.sttZIIhG0LluB/ovHjcJz8SdgFI1l5sPlkfOQlcJYvu',16992450190),(5,'alan','alanpinheiro@gmail.com','$2b$10$we9PTpt2jgHVjy/GNu/gnek6JXTvRq9TLd75xLWK1T8.jH0bOMmSO',55998774104),(6,'alan','alanp@gmail.com','$2b$10$K6vIgy/4CD51P0OF2otUvOouUerH/KX7/eNk.eDvB/Dk.XteiIjkq',16987664105),(7,'ricardo','ricardao@gmail.com','$2b$10$rO/V5IF9LJoZ9quvZV2fQuOBTrNTSFFVCBe24Dfrf7rUsh6LeVd4C',11999999999),(8,'ian','ian@gmail.com','$2b$10$bz45kbaD4jP4NFm490zGhe4XROPOxu8PduNZSBgvr.e7uInnoMN12',11999999999),(9,'iago','iago@gmail.com','$2b$10$YSq0ONQhtkVbwNwaFEzoGeiBVuEA.b4li8UdCvEzhCbHJm4uCPWRm',16987664105),(10,'leandro','le@gmail.com','$2b$10$tP.gjOJ7rokHbJt0U3DnRu8cAsQjNsOixZ4DCltH5m5GvGtBcMPKa',19994734804),(11,'iago','iago@gmail.com','$2b$10$r6e05fsnMnq6wBqk5yrgU.sWsXqCx2RMjugFOYv5ePdE7mV/1I5GC',79991916927);
/*!40000 ALTER TABLE `Usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mydb'
--

--
-- Dumping routines for database 'mydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-23 22:46:39
