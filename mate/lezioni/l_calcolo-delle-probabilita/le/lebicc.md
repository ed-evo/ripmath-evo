# Studio della variabile casuale gaussiana standardizzata

> Standardizzata implica che non dipende dall'unità di misura della variabile

Come esercizio, anche per ripassare un po' di Analisi, e per ricavarne le proprietà studiamo la funzione

$$
f(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}x^2}
$$

Seguiamo lo schema che abbiamo visto in Analisi.
Per i nostri calcoli sappiamo che la costante $1/\sqrt{2\pi}$ vale circa $0,3989$

- **Determinazione del campo di esistenza**
  [Il campo di esistenza è tutto $\mathbb{R}$]{.text-red}

- **Determinazione del tipo di funzione**
  Intanto posso dire che è una funzione pari perché se sostituisco $x$ con $-x$ non cambia niente $(-x)^2 = x^2$, quindi la funzione sarà [simmetrica rispetto all'asse delle $y$]{.text-red}

- **Intersezioni con gli assi**
  Vediamo se esistono intersezioni con l'asse $y$
  faccio il sistema fra la funzione e l'asse $y$
  $$
  \begin{cases} y = 1/\sqrt{2\pi} e^{-\frac{1}{2}x^2} \\ x = 0 \end{cases}
  $$

  $$
  \begin{cases} y = 1/\sqrt{2\pi} e^{-\frac{1}{2}0^2} \\ x = 0 \end{cases}
  $$

  essendo $e^0 = 1$

  $$
  \begin{cases} y = 1/\sqrt{2\pi} \approx 0,3989 \\ x = 0 \end{cases}
  $$

  Quindi la curva taglia l'asse delle $y$ nel punto [$A \equiv (0; 1/\sqrt{2\pi}) \approx (0; 0,3989)$]{.text-red}

  Vediamo ora se esistono intersezioni con l'asse $x$
  faccio il sistema fra la funzione e l'asse $x$
  $$
  \begin{cases} y = 1/\sqrt{2\pi} e^{-\frac{1}{2}x^2} \\ y = 0 \end{cases}
  $$

  $$
  \begin{cases} 1/\sqrt{2\pi} e^{-\frac{1}{2}x^2} = 0 \\ x = 0 \end{cases}
  $$

  essendo $e^{-\frac{1}{2}x^2}$ un esponenziale sarà sempre maggiore di zero, ed essendo $1/\sqrt{2\pi}$ una costante allora il termine non sarà mai zero, quindi [La curva non taglia l'asse delle $x$]{.text-red}

- **Valori agli estremi del campo di esistenza**
  Siccome il campo di esistenza va da $-\infty$ a $+\infty$ allora dovremo trovare tali valori con gli asintoti

- **Positività e negatività**
  Risolvo la disequazione
  $$
  1/\sqrt{2\pi} e^{-\frac{1}{2}x^2} > 0
  $$
  essendo $1/\sqrt{2\pi}$ una costante positiva basta risolvere
  $$
  e^{-\frac{1}{2}x^2} > 0
  $$
  questo essendo un esponenziale è sempre positivo
  [la funzione è sempre positiva]{.text-red} (il grafico sarà tutto sopra l'asse delle $x$)

- **Determinazione degli asintoti**
  Non possono esistere asintoti verticali (la funzione non diventa infinita per valori finiti di $x$)
  Ricerca di eventuali asintoti orizzontali od obliqui
  $$
  \lim_{x \to -\infty} 1/\sqrt{2\pi} e^{-\frac{1}{2}x^2} = e^{-\infty} = 0
  $$
  $$
  \lim_{x \to +\infty} 1/\sqrt{2\pi} e^{-\frac{1}{2}x^2} = e^{-\infty} = 0
  $$
  quindi l'asse delle $x$ è un asintoto orizzontale
  [$y = 0$ asintoto orizzontale]{.text-red}
  ed essendo la curva sempre positiva la curva si avvicina all'asintoto da sopra

- **Determinazione della derivata prima**
  Eseguiamo la derivata prima
  $1/\sqrt{2\pi}$ è una costante quindi resta davanti al risultato
  $e^{-\frac{1}{2}x^2}$ è una funzione (esponenziale) di funzione (esponente $-\frac{1}{2}x^2$)
  derivata dell'esponenziale $e^{-\frac{1}{2}x^2}$
  derivata dell'esponente $-\frac{1}{2} \cdot 2x = -x$
  Quindi ho la derivata
  $$
  y' = \frac{-x}{\sqrt{2\pi}} e^{-\frac{1}{2}x^2}
  $$

- **Crescenza e decrescenza**
  Poniamo la derivata prima maggiore di zero per vedere dove è positiva (funzione crescente) o negativa (funzione decrescente)
  $$
  \frac{-x}{\sqrt{2\pi}} e^{-\frac{1}{2}x^2} > 0
  $$
  essendo $1/\sqrt{2\pi}$ una costante positiva posso scrivere
  $$
  -x e^{-\frac{1}{2}x^2} > 0
  $$
  l'esponenziale è sempre positivo, quindi scrivo
  $$
  -x > 0
  $$
  ed ottengo
  $$
  x < 0
  $$
  La derivata è positiva per $x < 0$ ed è negativa per $x > 0$, quindi [la funzione è crescente per $x < 0$ ed è decrescente per $x > 0$]{.text-red}

- **Determinazione dei massimi e minimi**
  Senza risolvere equazioni, essendo la funzione crescente per $x < 0$ e decrescente per $x > 0$ allora il punto corrispondente ad $x=0$ è un massimo. Corrisponde al punto $A$ di intersezione con l'asse $y$
  [$A = M \equiv (0; 1/\sqrt{2\pi}) \approx (0; 0,3989)$]{.text-red}

- **Determinazione della derivata seconda**
  Eseguiamo la derivata della derivata prima:
  non considerando la costante $1/\sqrt{2\pi}$ è un prodotto di funzioni $-x$ ed $e^{-\frac{1}{2}x^2}$, quindi
  $$
  y'' = 1/\sqrt{2\pi} [ -1 \cdot e^{-\frac{1}{2}x^2} - x \cdot (-x e^{-\frac{1}{2}x^2})]
  $$
  $$
  y'' = 1/\sqrt{2\pi} [ -1 \cdot e^{-\frac{1}{2}x^2} + x^2 e^{-\frac{1}{2}x^2}]
  $$
  $$
  y'' = 1/\sqrt{2\pi} [ e^{-\frac{1}{2}x^2} (x^2 - 1)]
  $$
  ottengo
  $$
  y'' = \frac{x^2 - 1}{\sqrt{2\pi}} e^{-\frac{1}{2}x^2}
  $$

- **Concavità, convessità e flessi**
  Pongo la derivata seconda uguale a zero
  $$
  \frac{x^2 - 1}{\sqrt{2\pi}} e^{-\frac{1}{2}x^2} = 0
  $$
  essendo $\sqrt{2\pi}$ una costante ed essendo l'esponenziale per definizione sempre positivo la mia equazione si riduce a
  $$
  x^2 - 1 = 0
  $$
  ottengo quindi due soluzioni
  $x = -1$ ed $x = 1$
  ora studio il segno della mia funzione
  $$
  \frac{x^2 - 1}{\sqrt{2\pi}} e^{-\frac{1}{2}x^2} > 0
  $$
  anche qui, essendo $\sqrt{2\pi}$ una costante ed essendo l'esponenziale per definizione sempre positivo la mia disequazione si riduce a
  $$
  x^2 - 1 > 0
  $$
  essendo le soluzioni $-1$ ed $1$ la mia disequazione è verificata per valori esterni.

  > $------------ -1 ------------ +1 ------------$
  > $+ + + + + \quad 0 - - - - - - - - - - - \quad 0 \quad + + + + + + +$

  Quindi posso dire che
  [Da $-\infty$ a $-1$ la concavità è rivolta verso l'alto, da $-1$ a $1$ la concavità è rivolta verso il basso, da $1$ a $+\infty$ la concavità è rivolta verso l'alto]{.text-red}

  Inoltre posso dire che per $x=-1$ e per $x=1$ avremo due flessi:
  calcoliamo il valore dei punti di flesso
  per $x = -1$ abbiamo $y = 1/\sqrt{2\pi} e^{-\frac{1}{2}(-1)^2} = 1/\sqrt{2\pi} e^{-\frac{1}{2}}$
  per $x = 1$ abbiamo $y = 1/\sqrt{2\pi} e^{-\frac{1}{2}(1)^2} = 1/\sqrt{2\pi} e^{-\frac{1}{2}}$

  [Primo punto di flesso $F_1 \equiv (-1; 1/\sqrt{2\pi} e^{-\frac{1}{2}}) \approx (-1; 0,2419)$]{.text-red}
  [Secondo punto di flesso $F_2 \equiv (1; 1/\sqrt{2\pi} e^{-\frac{1}{2}}) \approx (1; 0,2419)$]{.text-red}

  Ci accontentiamo dei punti di flesso senza fare ulteriori calcoli (complicati) per individuare le equazioni delle tangenti di flesso

A destra il grafico della nostra funzione, per rappresentarla meglio l'unità di misura sulle $y$ è diversa da quella sulle $x$.
Siccome nella forma richiama una campana è chiamata anche "Curva a campana di Gauss".