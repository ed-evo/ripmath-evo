# Numeri in forma polinomiale

In questa pagina vediamo come, matematicamente, partendo da un numero come siamo abituati a trattarlo (forma decimale) è possibile trasformarlo in forma polinomiale

$$
a \cdot x^n + b \cdot x^{n-1} + \dots + c \cdot x^2 + d \cdot x^1 + e \cdot x^0
$$

e quindi poterlo scrivere in un'altra unità di misura. In pratica formalizziamo matematicamente quanto fatto nella pagina precedente sul numero

[//////////////////////////////////////////////////////////////////// = $68_{10}$]{.text-red-darken-1}

utilizzando la forma $68_{10}$ per semplicità.

Per trasformare un numero decimale in altra base si deve dividere tale numero per la base scelta riportando i resti e ripetendo il procedimento finché il resto è minore della base scelta: la lettura dei resti partendo dall'ultimo sino al primo mi fornisce il numero nella base cercata.

> È lo stesso procedimento della pagina precedente: se prendo il numero
> [////////////////////////////////////////////////////////////////////]{.text-red-darken-1}
> e raggruppo i termini per $10$ è come se lo divido per $10$ ed ottengo come resto gli ultimi termini (quelli che non entrano in una parentesi):
> [ (//////////) (//////////) (//////////) (//////////) (//////////) (//////////) ////////]{.text-red-darken-1}
> ho quindi come resto $8$.
> Divido di nuovo, stavolta le parentesi per $10$ e siccome sono $6$, cioè meno di $10$, ottengo come resto $6$.
> Quindi metto in ordine inverso i due resti ed ottengo [$68_{10}$]{.text-red-darken-1}.

- in base $5$
  Nel risultato posso usare solo le cifre $0, 1, 2, 3, 4$.
  
  Come ho già detto prendiamo $68_{10}$ per comodità, ma potremmo farlo tranquillamente sul numero //////////////////////////////////////////////////////////////////// dividendo per $5$, cioè raggruppando ricorsivamente per gruppi di $5$ (raggruppare è equivalente a dividere).

  Divido il numero $68$ per $5$
  **$68:5 \Rightarrow 68 = 5 \cdot 13 + 3$** cioè ottengo quoziente $13$ e **resto = $3$ (primo resto)**
  ripeto il procedimento sul $13$
  **$13:5 \Rightarrow 13 = 5 \cdot 2 + 3$** cioè ottengo quoziente $2$ e **resto = $3$ (secondo resto)**
  ripeto il procedimento sul $2$
  **$2:5 \Rightarrow 2 = 5 \cdot 0 + 2$** cioè ottengo quoziente $0$ e **resto = $2$ (ultimo resto)**

  Ordino i resti dall'ultimo al primo ed ottengo $233_5$ od anche, in forma polinomiale:

  $$
  \textcolor{red}{233_5 = 2 \cdot 5^2 + 3 \cdot 5^1 + 3 \cdot 5^0 = 2 \cdot 5^2 + 3 \cdot 5 + 3}
  $$

  Se lo rivoglio in forma decimale basta sviluppare le potenze e calcolare:
  **$2 \cdot 5^2 + 3 \cdot 5 + 3 = 2 \cdot 25 + 3 \cdot 5 + 3 = 50 + 15 + 3 = 68$**

- in base $3$
  Nel risultato posso usare solo le cifre $0, 1, 2$.

  Divido il numero $68$ per $3$
  **$68:3 \Rightarrow 68 = 22 \cdot 3 + 2$** cioè ottengo quoziente $22$ e **resto = $2$ (primo resto)**
  ripeto il procedimento sul $22$
  **$22:3 \Rightarrow 22 = 3 \cdot 7 + 1$** cioè ottengo quoziente $7$ e **resto = $1$ (secondo resto)**
  ripeto il procedimento sul $7$
  **$7:3 \Rightarrow 7 = 3 \cdot 2 + 1$** cioè ottengo quoziente $2$ e **resto = $1$ (terzo resto)**
  ripeto il procedimento sul $2$
  **$2:3 \Rightarrow 2 = 3 \cdot 0 + 2$** cioè ottengo quoziente $0$ e **resto = $2$ (ultimo resto)**

  Ordino i resti dall'ultimo al primo ed ottengo $2112_3$ od anche, in forma polinomiale:

  $$
  \textcolor{red}{2112_3 = 2 \cdot 3^3 + 1 \cdot 3^2 + 1 \cdot 3^1 + 2 \cdot 3^0 = 2 \cdot 3^3 + 1 \cdot 3^2 + 1 \cdot 3 + 2}
  $$

  Se lo rivoglio in forma decimale basta sviluppare le potenze e calcolare:
  **$2 \cdot 3^3 + 1 \cdot 3^2 + 1 \cdot 3 + 2 = 2 \cdot 27 + 1 \cdot 9 + 1 \cdot 3 + 2 = 54 + 9 + 3 + 2 = 68$**