# sistema ottale

Un certo interesse in informatica ha il sistema di numerazione a base $$8$$. In pratica non è molto usato, noi qui lo ricordiamo solo per una sua peculiare caratteristica. Le cifre binarie corrispondenti alle cifre ottali sono date da soli $$3$$ bit; infatti abbiamo, per le cifre possibili:

| cifre ottali | cifre binarie |
| :---: | :---: |
| $$0$$ | $$000$$ |
| $$1$$ | $$001$$ |
| $$2$$ | $$010$$ |
| $$3$$ | $$011$$ |
| $$4$$ | $$100$$ |
| $$5$$ | $$101$$ |
| $$6$$ | $$110$$ |
| $$7$$ | $$111$$ |

La caratteristica interessante è quindi che ogni numero a base $$8$$ può essere trasformato immediatamente in binario sostituendo ad ogni sua cifra ottale le tre cifre binarie corrispondenti.

> per noi esseri umani è più facile trasformare un numero dal sistema decimale nel sistema ottale e quindi diventa automatico trasformarlo poi in binario

Esempio: trasformare il numero $$6301_8$$ nel suo equivalente binario. Metto al posto di ogni cifra la tripletta di bit equivalente:

| $$6$$ | $$3$$ | $$0$$ | $$1$$ |
| :---: | :---: | :---: | :---: |
| $$110$$ | $$011$$ | $$000$$ | $$001$$ |

quindi:

$$
6301_8 = 110011000001_2
$$

> **Esercizio:** il bilancio di un ministero degli Stati Uniti è stato nel $$1946$$ di $$1.426.895.325 \$$$. Inserire tale cifra in un calcolatore elettronico significa trasformare quella cifra in binario; prima la trasformo in ottale dividendo per $$8$$ e considerando i resti:
>
> $$1426895325 : 8$$ dà $$178361915$$ con resto di $$5$$
> $$178.361.915 : 8$$ dà $$22295239$$ con resto di $$3$$
> $$22295239 : 8$$ dà $$2786904$$ con resto di $$7$$
> $$2786904 : 8$$ dà $$348363$$ con resto $$0$$
> $$348363 : 8$$ dà $$43535$$ con resto di $$3$$
> $$43535 : 8$$ dà $$5441$$ con resto di $$7$$
> $$5441 : 8$$ dà $$680$$ con resto di $$1$$
> $$680 : 8$$ dà $$85$$ con resto $$0$$
> $$85 : 8$$ dà $$10$$ con resto di $$5$$
> $$10 : 8$$ dà $$1$$ con resto di $$2$$
> $$1 : 8$$ dà $$0$$ con resto di $$1$$
>
> quindi, riscrivendo i resti cominciando dall'ultimo fino al primo:
>
> $$
> 1426895325_{10} = 12501730735_8 = 001010101001111011000111001101_2 = 1010101001111011000111001101_2
> $$
>
> Spero vi siate convinti che, per un essere umano, è più semplice trasformare così piuttosto che trasformare subito in base $$2$$.