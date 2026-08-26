In effetti

$$
\textcolor{red}{y' + p(x)y = 0}
$$

scriviamola come

$$
\textcolor{red}{\frac{dy}{dx} = -p(x)y}
$$

separiamo le variabili

$$
\textcolor{red}{\frac{dy}{y} = -p(x)dx}
$$

ora integriamo da entrambe le parti

$$
\textcolor{red}{\log y = -\int p(x) \, dx + k}
$$

con $k$ costante e $\log y$ logaritmo naturale di $y$
per ricavare la $y$ applico l'esponenziale ad entrambi i membri

$$
\textcolor{red}{e^{\log y} = e^{-\int p(x) \, dx + k}}
$$

e quindi, ricordando che l'esponenziale è l'inverso del logaritmo e la loro composizione restituisce l'argomento

$$
\textcolor{red}{y = e^{-\int p(x) \, dx} \cdot e^k}
$$

ho usato la proprietà delle potenze per passare dalla somma degli esponenti al prodotto delle potenze
e ponendo $e^k = c$ otteniamo la formula finale.

$$
\textcolor{red}{y = c e^{-\int p(x) \, dx}}
$$

> Non so se hai notato, ma abbiamo posto la costante uguale a $k$ in modo da poter usare $c$ nella formula finale: in matematica spesso si cerca di arrivare ad una formula finale con lettere prefissate ed in tal caso le lettere che servono prima del risultato finale contano poco e si usano solo per l'occasione