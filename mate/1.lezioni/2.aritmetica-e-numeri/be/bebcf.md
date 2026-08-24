# Radice n-esima di un numero complesso

Per calcolare la radice n-esima di un numero complesso dovremo rifarci alla formula inversa dell'elevamento a potenza per quanto riguarda $$\rho$$ non c'è nessun problema invece i problemi sorgono per determinare l'angolo $$\Theta$$: infatti quando eleviamo a potenza un angolo noi eseguiamo una rotazione e quanto più è elevata la potenza ed è ampio l'angolo tanti più giri farà l'angolo risultante.

Teniamo inoltre presente che per il teorema fondamentale dell'algebra una radice n-sima dovrà avere $$n$$ soluzioni in pratica dovremo trovare $$n$$ valori per l'angolo $$\Theta$$; allora otterremo:

- il primo angolo $$\Theta_1$$ considerando l'angolo risultante nel primo giro
- il secondo angolo $$\Theta_2$$ considerando l'angolo risultante nel secondo giro
- il terzo angolo $$\Theta_3$$ considerando l'angolo risultante nel terzo giro
- ...
- l'$$n$$-esimo angolo $$\Theta_n$$ considerando l'angolo risultante nell'$$n$$-esimo giro

> Se considerassi un giro in più ritroverei il primo angolo: ricordiamoci che le funzioni trigonometriche sono periodiche.

Con queste considerazioni avremo che dato il numero complesso

$$
\textcolor{blue}{z = \rho (\cos \Theta + i \operatorname{sen} \Theta)}
$$

le sue radici n-sime saranno

$$
\textcolor{blue}{(\sqrt[n]{z})_k = \sqrt[n]{\rho} \left( \cos \frac{\Theta + 2k\pi}{n} + i \operatorname{sen} \frac{\Theta + 2k\pi}{n} \right)}
$$

[Con $$k = 0, 1, 2, \dots, n-1$$]{.text-blue}

> Come accennato prima se continuassi a prendere altri valori oltre questi troverei ancora le stesse radici.

***

Un esercizio chiarirà meglio il metodo: se preferisci risolvere l'esercizio in gradi.

Trovare le radici quarte del numero complesso

$$
\textcolor{red}{z = 16 \left( \cos \frac{2\pi}{3} + i \operatorname{sen} \frac{2\pi}{3} \right)}
$$

applichiamo la formula

$$
\textcolor{red}{(\sqrt[4]{z})_k = \sqrt[4]{16} \left( \cos \frac{\frac{2\pi}{3} + 2k\pi}{4} + i \operatorname{sen} \frac{\frac{2\pi}{3} + 2k\pi}{4} \right)}
$$

[Con $$k = 0, 1, 2, 3$$]{.text-red}

chiamiamo le 4 radici $$w_0, w_1, w_2, w_3$$:

- per $$k=0$$ otteniamo la prima soluzione $$w_0$$
  $$
  \textcolor{red}{w_0 = 2 \left( \cos \frac{\pi}{6} + i \operatorname{sen} \frac{\pi}{6} \right)}
  $$

- per $$k=1$$ otteniamo
  $$
  \textcolor{red}{w_1 = 2 \left( \cos \frac{\frac{2\pi}{3} + 2\pi}{4} + i \operatorname{sen} \frac{\frac{2\pi}{3} + 2\pi}{4} \right)}
  $$
  e sommando gli angoli
  $$
  \textcolor{red}{w_1 = 2 \left( \cos \frac{2\pi}{3} + i \operatorname{sen} \frac{2\pi}{3} \right)}
  $$

- per $$k=2$$ otteniamo
  $$
  \textcolor{red}{w_2 = 2 \left( \cos \frac{\frac{2\pi}{3} + 4\pi}{4} + i \operatorname{sen} \frac{\frac{2\pi}{3} + 4\pi}{4} \right)}
  $$
  e sommando gli angoli
  $$
  \textcolor{red}{w_2 = 2 \left( \cos \frac{7\pi}{6} + i \operatorname{sen} \frac{7\pi}{6} \right)}
  $$

- per $$k=3$$ otteniamo
  $$
  \textcolor{red}{w_3 = 2 \left( \cos \frac{\frac{2\pi}{3} + 6\pi}{4} + i \operatorname{sen} \frac{\frac{2\pi}{3} + 6\pi}{4} \right)}
  $$
  e sommando gli angoli
  $$
  \textcolor{red}{w_3 = 2 \left( \cos \frac{5\pi}{3} + i \operatorname{sen} \frac{5\pi}{3} \right)}
  $$

> Da notare che se rappresentiamo le soluzioni sul cerchio trigonometrico troviamo che le soluzioni dividono in parti uguali il cerchio (in questo caso sono vertici di un quadrato). Il fatto è generale: la radice n-sima di un numero complesso dà dei valori che dividono il cerchio trigonometrico in $$n$$ parti uguali.

***

Applicazioni: Possiamo utilizzarle per risolvere equazioni complesse tipo

$$
\textcolor{red}{x^n = z}
$$