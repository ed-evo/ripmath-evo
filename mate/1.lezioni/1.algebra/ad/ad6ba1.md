## Caso del polinomio non completo

Succede abbastanza spesso che il polinomio non sia completo, cioè che manchino dei termini ad esempio proviamo a scomporre:

$$
\textcolor{red}{x^3-2x+1}
$$

provo

$$
\textcolor{red}{(x-1); P(1)=(1)^3-2(1)+1=1-2+1=0}
$$

quindi $$\textcolor{red}{(x-1)}$$ è un divisore, però posso fare la divisione di Ruffini solo se ci sono tutti i termini ed allora siccome mi manca $$\textcolor{red}{x^2}$$ al suo posto dovrò mettere uno zero cioè

$$
\textcolor{red}{x^3+0x^2-2x+1}
$$

ed ora procedo nel solito modo:

$$
\textcolor{red}{x^3-2x+1=(x-1)(x^2+x-1)}
$$

Ora si dovrebbe scomporre $$\textcolor{red}{x^2+x-1}$$
provo

$$
\textcolor{red}{(x-1); P(1)=(1)^2+(1)-1=1+1-1\neq 0}
$$

$$
\textcolor{red}{(x+1); P(-1)=(-1)^2+(-1)-1=1-1-1\neq 0}
$$

e poiché i divisori del termine noto sono solamente $$\textcolor{red}{+1, -1}$$ il polinomio non è ulteriormente scomponibile:
risultato finale:

$$
\textcolor{red}{x^3-2x+1=(x-1)(x^2+x-1)}
$$

> **Esercizio:** Per esercizio prova a scomporre
>
> $$
> \textcolor{red}{x^5-32=}
> $$
>
> ricordando che per ordinare dovrai scrivere
>
> $$
> \textcolor{red}{x^5+0x^4+0x^3+0x^2+0x-32=}
> $$