# [Introduzione]{.text-red-darken-1}

***

Per poter eseguire gli esercizi relativi a questo argomento è essenziale sia conoscere il metodo di [divisione dei polinomi](../../a/ad/ad5a.html) che saper fare la [scomposizione di Ruffini](../../a/ad/ad6b.html).

***

Se ho una funzione razionale fratta come prima cosa devo controllare che il numeratore abbia grado inferiore al denominatore; in caso contrario devo dividere il numeratore per il denominatore fino ad ottenere il resto, perché vale l'uguaglianza:

$$
\textcolor{blue}{\frac{N(x)}{D(x)} = Q(x) + \frac{R(x)}{D(x)}}
$$

avendo posto:
- [$$\textcolor{blue}{N(x)}$$]{.text-blue} numeratore
- [$$\textcolor{blue}{D(x)}$$]{.text-blue} denominatore
- [$$\textcolor{blue}{Q(x)}$$]{.text-blue} quoziente
- [$$\textcolor{blue}{R(x)}$$]{.text-blue} resto

$$Q(x)$$ sarà un polinomio quindi sappiamo integrarlo; il nostro problema è ora saper integrare il termine

$$
\textcolor{blue}{\frac{R(x)}{D(x)}}
$$

***

Vediamo un esempio di riduzione della frazione: supponiamo di dover calcolare l'integrale

$$
\textcolor{blue}{\int \frac{x^5 - 2x^4 - 3x^3 + 2x^2 - 4x + 3}{x^3 - 2x^2 - x + 2} \, dx}
$$

Eseguiamo la divisione fra polinomi:

$$
\textcolor{blue}{(x^5 - 2x^4 - 3x^3 + 2x^2 - 4x + 3) : (x^3 - 2x^2 - x + 2) = x^2 - 2}
$$

con resto:

$$
\textcolor{blue}{-4x^2 - 6x + 7}
$$

Il quoziente vale [$$x^2 - 2$$]{.text-blue}
il resto vale [$$-4x^2 - 6x + 7$$]{.text-blue}

quindi, invece dell'integrale iniziale, posso calcolare gli integrali:

$$
\textcolor{blue}{\int (x^2 - 2) \, dx + \int \frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} \, dx}
$$

Nelle pagine seguenti vedremo come si possano calcolare integrali quali quello frazionario qui sopra ottenuto.

***