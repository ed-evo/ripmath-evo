# [Matrici: concetti di base]{.text-red}

Una matrice $$m \times n$$ ($$m$$ righe per $$n$$ colonne) è una tabella come la seguente:

$$
\left\| \begin{matrix}
\textcolor{red}{a_{1,1}} & \textcolor{red}{a_{1,2}} & \dots & \textcolor{red}{a_{1,k}} & \dots & \textcolor{red}{a_{1,n}} \\
\textcolor{red}{a_{2,1}} & \textcolor{red}{a_{2,2}} & \dots & \textcolor{red}{a_{2,k}} & \dots & \textcolor{red}{a_{2,n}} \\
\vdots & \vdots & \ddots & \vdots & \ddots & \vdots \\
\textcolor{red}{a_{h,1}} & \textcolor{red}{a_{h,2}} & \dots & \textcolor{red}{a_{h,k}} & \dots & \textcolor{red}{a_{h,n}} \\
\vdots & \vdots & \ddots & \vdots & \ddots & \vdots \\
\textcolor{red}{a_{m,1}} & \textcolor{red}{a_{m,2}} & \dots & \textcolor{red}{a_{m,k}} & \dots & \textcolor{red}{a_{m,n}}
\end{matrix} \right\|
$$

con $$m$$ ed $$n$$ numeri naturali. In essa possiamo distinguere le righe e le colonne. Può essere indicata in breve con i simboli:

$$\textcolor{red}{\| a_{h,k} \|}$$ oppure $$\textcolor{red}{( a_{h,k} )}$$ con $$\textcolor{red}{h}$$ e $$\textcolor{red}{k}$$ numeri naturali e $$\textcolor{red}{1 < h < m}$$ e $$\textcolor{red}{1 < k < n}$$.

> Forse più che la definizione sulle matrici è interessante l'utilizzo di questo ente matematico:
> Le matrici compariranno in tutte quelle discipline dove avremo che un oggetto è suddiviso in varie parti o componenti come:
> - un insieme di $$k$$ vettori nello spazio $$n$$-dimensionale
> - le coordinate di $$k$$ punti nello spazio ad $$n$$ dimensioni
> - un sistema di $$k$$ equazioni ad $$n$$ incognite
> - l'insieme delle possibili permutazioni su $$n$$ oggetti
>
> Per fartene comprendere l'importanza pensa che nella fisica moderna è possibile utilizzare le matrici per raggiungere gli stessi risultati ottenuti con la funzione d'onda; pensa anche che uno dei maggiori software per lo studio della matematica il "LABMAT" è basato tutto sulle matrici.

È possibile considerare una matrice con una sola riga **Matrice riga**:

$$
\left\| \textcolor{red}{a_{1,1} \quad a_{1,2} \quad \dots \quad a_{1,k} \quad \dots \quad a_{1,n}} \right\|
$$

oppure anche una matrice con una sola colonna **matrice colonna**:

$$
\left\| \begin{matrix} \textcolor{red}{a_{1,1}} \\ \textcolor{red}{a_{2,1}} \\ \vdots \\ \textcolor{red}{a_{h,1}} \\ \vdots \\ \textcolor{red}{a_{m,1}} \end{matrix} \right\|
$$

ma le matrici che ci interesseranno particolarmente saranno quelle che hanno lo stesso numero di righe e colonne **matrici quadrate o di ordine $$n$$**:

$$
\left\| \begin{matrix}
\textcolor{red}{a_{1,1}} & \textcolor{red}{a_{1,2}} & \dots & \textcolor{red}{a_{1,k}} & \dots & \textcolor{red}{a_{1,n}} \\
\textcolor{red}{a_{2,1}} & \textcolor{red}{a_{2,2}} & \dots & \textcolor{red}{a_{2,k}} & \dots & \textcolor{red}{a_{2,n}} \\
\vdots & \vdots & \ddots & \vdots & \ddots & \vdots \\
\textcolor{red}{a_{h,1}} & \textcolor{red}{a_{h,2}} & \dots & \textcolor{red}{a_{h,k}} & \dots & \textcolor{red}{a_{h,n}} \\
\vdots & \vdots & \ddots & \vdots & \ddots & \vdots \\
\textcolor{red}{a_{n,1}} & \textcolor{red}{a_{n,2}} & \dots & \textcolor{red}{a_{n,k}} & \dots & \textcolor{red}{a_{n,n}}
\end{matrix} \right\|
$$