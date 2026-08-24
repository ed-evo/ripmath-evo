# [metodo delle derivate successive]{.text-red}

Il metodo delle derivate successive dice semplicemente questo: se la derivata prima in un punto vale zero basta calcolarvi la derivata seconda:

- se la derivata seconda è positiva in quel punto c'è un minimo
- se la derivata seconda è negativa in quel punto c'è un massimo
- se la derivata seconda è nulla occorre calcolare la derivata terza
    - se la derivata terza è positiva in quel punto c'è un flesso ascendente
    - se la derivata terza è negativa in quel punto c'è un flesso discendente
    - se la derivata terza è nulla occorre calcolare la derivata quarta
        - se la derivata quarta è positiva in quel punto c'è un minimo
        - se la derivata quarta è negativa in quel punto c'è un massimo
        - se la derivata quarta è nulla occorre calcolare la derivata quinta
            - eccetera eccetera

> **Nota:** per flesso intendiamo qui flesso orizzontale

> **Regola:** [Se la prima derivata diversa da zero è di ordine pari ed è positiva avremo un minimo, se è negativa un massimo; se la prima derivata diversa da zero è di ordine dispari ed è positiva avremo un flesso ascendente, se è negativa un flesso discendente.]{.text-purple}

Se ti serve puoi vedere la [dimostrazione](cgeba.html)

Facciamo alcuni esempi:

- [esempio 1 (Massimo)](#esercizio1)
- [esempio 2 (minimo)](#esercizio2)
- [esempio 3 (flesso)](#esercizio3)

---

<a name="esercizio1"></a>

### esempio 1
Calcolare i punti di eventuale massimo, minimo e flesso orizzontale della funzione:

$$
\textcolor{red}{y = -3x^2 - 6x - 8}
$$

Trovo la derivata prima della funzione:

$$
\textcolor{red}{y' = -6x - 6}
$$

Pongo la derivata uguale a zero per cercare eventuali punti estremanti:

$$
\textcolor{red}{-6x - 6 = 0}
$$

$$
\textcolor{red}{-6x = 6}
$$

$$
\textcolor{red}{6x = -6}
$$

$$
\textcolor{red}{x = -1}
$$

Calcolo il valore della funzione di partenza nel punto $-1$:

$$
\textcolor{red}{f(-1) = -3 \cdot (-1)^2 - 6 \cdot (-1) - 8 = -5}
$$

Il punto $\textcolor{red}{A(-1, -5)}$ è un punto estremante, devo vedere se è un massimo, un minimo o un flesso.

Trovo la derivata seconda:

$$
\textcolor{red}{y'' = -6}
$$

Ora dovrei calcolare il valore della derivata seconda sostituendo ad $x$ il valore $-1$, ma in questo caso il valore della derivata seconda è costante:

$$
\textcolor{red}{y''(-1) = -6 < 0}
$$

Quindi abbiamo un massimo come avevamo già trovato (l'esercizio è stato già risolto con l'altro metodo).

---

<a name="esercizio2"></a>

### esempio 2
Calcolare i punti di eventuale massimo, minimo e flesso orizzontale della funzione:

$$
\textcolor{red}{y = x^4}
$$

Trovo la derivata prima della funzione:

$$
\textcolor{red}{y' = 4x^3}
$$

Pongo la derivata uguale a zero per cercare eventuali punti estremanti:

$$
\textcolor{red}{4x^3 = 0}
$$

$$
\textcolor{red}{x^3 = 0}
$$

$$
\textcolor{red}{x = 0}
$$

Calcolo il valore della funzione di partenza nel punto $0$:

$$
\textcolor{red}{f(0) = 0^4 = 0}
$$

Il punto $\textcolor{red}{O(0, 0)}$ è un punto estremante, devo vedere se è un massimo, un minimo o un flesso.

Trovo la derivata seconda:

$$
\textcolor{red}{y'' = 12x^2}
$$

La calcolo per $x=0$:

$$
\textcolor{red}{y''(0) = 12 \cdot 0^2 = 0}
$$

Trovo la derivata terza:

$$
\textcolor{red}{y''' = 24x}
$$

La calcolo per $x=0$:

$$
\textcolor{red}{y'''(0) = 24 \cdot 0 = 0}
$$

Trovo la derivata quarta:

$$
\textcolor{red}{y^{IV} = 24}
$$

La calcolo per $x=0$:

$$
\textcolor{red}{y^{IV}(0) = 24 > 0}
$$

Il punto $\textcolor{red}{O(0,0)}$ è un minimo perché la derivata quarta (ordine pari) è nel punto maggiore di zero.

---

<a name="esercizio3"></a>

### esempio 3
Calcolare i punti di eventuale massimo, minimo e flesso orizzontale della funzione:

$$
\textcolor{red}{y = x^5}
$$

Trovo la derivata prima della funzione:

$$
\textcolor{red}{y' = 5x^4}
$$

Pongo la derivata uguale a zero per cercare eventuali punti estremanti:

$$
\textcolor{red}{5x^4 = 0}
$$

$$
\textcolor{red}{x^4 = 0}
$$

$$
\textcolor{red}{x = 0}
$$

Calcolo il valore della funzione di partenza nel punto $0$:

$$
\textcolor{red}{f(0) = 0^5 = 0}
$$

Il punto $\textcolor{red}{O(0, 0)}$ è un punto estremante, devo vedere se è un massimo, un minimo o un flesso.

Trovo la derivata seconda:

$$
\textcolor{red}{y'' = 20x^3}
$$

La calcolo per $x=0$:

$$
\textcolor{red}{y''(0) = 20 \cdot 0^3 = 0}
$$

Trovo la derivata terza:

$$
\textcolor{red}{y''' = 60x^2}
$$

La calcolo per $x=0$:

$$
\textcolor{red}{y'''(0) = 60 \cdot 0^2 = 0}
$$

Trovo la derivata quarta:

$$
\textcolor{red}{y^{IV} = 120x}
$$

La calcolo per $x=0$:

$$
\textcolor{red}{y^{IV}(0) = 120 \cdot 0 = 0}
$$

Trovo la derivata quinta:

$$
\textcolor{red}{y^V = 120}
$$

La calcolo per $x=0$:

$$
\textcolor{red}{y^V(0) = 120 > 0}
$$

Il punto $\textcolor{red}{O(0,0)}$ è un flesso orizzontale ascendente perché la derivata quinta (ordine dispari) è nel punto maggiore di zero.