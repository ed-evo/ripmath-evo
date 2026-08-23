# [Sistema impossibile]{.text-red}

Il sistema è impossibile se le sue equazioni si contraddicono fra di loro.

$$
\textcolor{red}{
\begin{cases} 
x + y = 3 \\ 
x + y = 1 
\end{cases}
}
$$

[La somma di due numeri è $$3$$ e la loro somma è $$1$$.]{.text-red}

Non è possibile che due numeri sommati valgano una volta $$3$$ ed una volta $$1$$, quindi tutto il sistema è impossibile.
Se lo risolvo col metodo di sostituzione, col metodo di addizione oppure di confronto ottengo un'equazione impossibile, mentre col metodo di Cramer otterrò:

$$
\textcolor{red}{
\begin{cases} 
x = \frac{\text{numero}}{0} \\ 
y = \frac{\text{numero}}{0} 
\end{cases}
}
$$

> Che poi è la stessa cosa perché, se fai il minimo comune multiplo, ottieni:
> $$
> \textcolor{red}{
> \begin{cases} 
> 0 = \text{numero} \\ 
> 0 = \text{numero} 
> \end{cases}
> }
> $$

Osserviamo che se consideriamo i coefficienti:

$$
\textcolor{red}{
\begin{matrix}
1 & 1 & 3 \\
1 & 1 & 1
\end{matrix}
}
$$

e faccio i rapporti: i primi due rapporti sono uguali tra loro ma diversi dal terzo:

$$
\textcolor{red}{
\frac{1}{1} = \frac{1}{1} \neq \frac{3}{1}
}
$$
sistema impossibile.

In generale, un sistema:

$$
\textcolor{red}{
\begin{cases} 
ax + by = c \\ 
a'x - b'y = c' 
\end{cases}
}
$$

è impossibile se:

$$
\textcolor{red}{
\frac{a}{a'} = \frac{b}{b'} \neq \frac{c}{c'}
}
$$