# Distribuzione geometrica

Chiamando $\textcolor{red}{p}$ la probabilità che l'evento si verifichi, $\textcolor{red}{q}$ la probabilità che l'evento non si verifichi, avremo la variabile aleatoria $\textcolor{red}{Z}$ (si chiama $\textcolor{red}{Z}$ per consuetudine).

| $\textcolor{red}{Z}$ | $\textcolor{red}{1}$ | $\textcolor{red}{2}$ | $\textcolor{red}{3}$ | $\textcolor{red}{4}$ | $\dots$ | $\textcolor{red}{n}$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| $\textcolor{red}{Pr}$ | $\textcolor{red}{p}$ | $\textcolor{red}{q \cdot p}$ | $\textcolor{red}{q^2 \cdot p}$ | $\textcolor{red}{q^3 \cdot p}$ | $\dots$ | $\textcolor{red}{q^{n-1} \cdot p}$ |

> **Note sulla costruzione della tabella:**
> 
> la probabilità che l'evento accada alla prima prova è $\textcolor{red}{p}$
> 
> la probabilità che l'evento accada alla seconda prova è $\textcolor{red}{q \cdot p}$ perché avremo che l'evento non accade alla prima ($q$) ma alla seconda ($p$)
> 
> la probabilità che l'evento accada alla terza prova è $\textcolor{red}{q^2 \cdot p}$ perché avremo che l'evento non accade alla prima ($q$), non accade alla seconda ($q$) ma alla terza ($p$)
> 
> la probabilità che l'evento accada alla quarta prova è $\textcolor{red}{q^3 \cdot p}$ perché avremo che l'evento non accade alla prima ($q$), non accade alla seconda ($q$), non accade alla terza ($q$) ma alla quarta ($p$)
> 
> $\dots$
> 
> la probabilità che l'evento accada alla $n$-esima prova è $\textcolor{red}{q^{n-1} \cdot p}$ perché avremo che l'evento non accade alla prima ($q$), non accade alla seconda ($q$), non accade alla terza ($q$), $\dots$ non accade alla $(n-1)$-esima ($q$), ma accade alla $n$-esima prova ($p$)

In generale si indica anche con:

$$
p(Z=n) = p \cdot q^{n-1}
$$

> Da notare che l'insieme delle probabilità è una successione geometrica di ragione $q$, ed, essendo $q$ sempre minore di $1$, la successione tenderà sempre a zero.

Vediamo, su un semplice esempio, la rappresentazione grafica di una distribuzione geometrica: trovare le probabilità di uscita di "testa" al primo, secondo, terzo, $\dots, n$-esimo lancio di una moneta e rappresentarla mediante la distribuzione geometrica.

$\textcolor{red}{p}$ probabilità di uscita di testa = $1/2$
$\textcolor{red}{q}$ probabilità di non uscita di testa = $1/2$
la variabile aleatoria $\textcolor{red}{Z}$ sarà:

| $\textcolor{red}{Z}$ | $\textcolor{red}{1}$ | $\textcolor{red}{2}$ | $\textcolor{red}{3}$ | $\textcolor{red}{4}$ | $\dots$ | $\textcolor{red}{n}$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| $\textcolor{red}{Pr}$ | $\textcolor{red}{1/2}$ | $\textcolor{red}{1/2 \cdot 1/2}$ | $\textcolor{red}{(1/2)^2 \cdot 1/2}$ | $\textcolor{red}{(1/2)^3 \cdot 1/2}$ | $\dots$ | $\textcolor{red}{(1/2)^{n-1} \cdot 1/2}$ |

Cioè:

| $\textcolor{red}{Z}$ | $\textcolor{red}{1}$ | $\textcolor{red}{2}$ | $\textcolor{red}{3}$ | $\textcolor{red}{4}$ | $\dots$ | $\textcolor{red}{n}$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| $\textcolor{red}{Pr}$ | $\textcolor{red}{1/2}$ | $\textcolor{red}{1/4}$ | $\textcolor{red}{1/8}$ | $\textcolor{red}{1/16}$ | $\dots$ | $\textcolor{red}{(1/2)^n}$ |

Ed avremo come rappresentazione grafica della distribuzione geometrica un istogramma decrescente. Questa configurazione sarà valida in generale: avremo che i vari valori di probabilità all'aumentare delle prove diminuiranno sempre fino a ridursi a valori vicinissimi a zero.

> Da notare che, siccome l'area di tutti i rettangoli vale $1$ (evento certo) e l'area del primo rettangolo vale $1/2$, l'evento è sempre più probabile che succeda alla prima prova (è più probabile che esca testa per la prima volta alla prima prova piuttosto che esca per la prima volta alla millesima prova).