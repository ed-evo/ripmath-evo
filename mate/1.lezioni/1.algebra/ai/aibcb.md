# Sistema lineare omogeneo

Se il sistema è lineare omogeneo di $$n$$ equazioni in $$n$$ incognite invece devi:

1. **Controllare la matrice [incompleta]{.text-blue} e vedere se il rango vale $$\textcolor{red}{n}$$: se vale $$\textcolor{red}{n}$$ allora l'unica soluzione è la soluzione banale**

   $$
   \begin{cases} 
   \textcolor{blue}{x_1 = 0} \\ 
   \textcolor{blue}{x_2 = 0} \\ 
   \dots \\ 
   \dots \\ 
   \textcolor{blue}{x_{n-1} = 0} \\ 
   \textcolor{blue}{x_n = 0} 
   \end{cases}
   $$

2. **Se il rango è uguale ad un numero $$\textcolor{red}{s}$$ inferiore a $$\textcolor{red}{n}$$ allora devo scegliere le equazioni corrispondenti al determinante il cui valore sia diverso da zero e considerare solo un numero di incognite uguale al numero di equazioni considerate spostando le altre incognite dopo l'uguale trattandole come fossero parametri e risolvere il sistema che ottengo con il metodo di Cramer (o di sostituzione). Otterrò un numero $$\textcolor{red}{\infty^{n-s}}$$ di soluzioni, tra cui anche la soluzione banale**

> **Nota:** Ripeto la nota della pagina precedente: fino a $$4$$ incognite useremo le lettere $$\textcolor{red}{x}$$, $$\textcolor{red}{y}$$, $$\textcolor{red}{z}$$, $$\textcolor{red}{t}$$, mentre invece da $$5$$ incognite in avanti useremo $$\textcolor{red}{x_1}$$, $$\textcolor{red}{x_2}$$, $$\textcolor{red}{x_3}$$, $$\textcolor{red}{x_4}$$, $$\textcolor{red}{x_5}$$, $$\textcolor{red}{x_6}$$, $$\textcolor{red}{x_7}$$,...

Vediamo un paio di esercizi:

Inserire esercizi uno con $$4$$ incognite ed una sola soluzione, ed uno da $$5$$ con $$\infty^2$$ soluzioni.