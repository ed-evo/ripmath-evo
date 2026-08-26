# Derivate parziali

Veramente per poter fare le derivate parziali bisognerebbe parlare prima di funzioni a più incognite, cioè del tipo

$$
\textcolor{red}{z = f(x,y)}
$$

intuitivamente sono funzioni ove le variabili indipendenti sono più di una.

> nelle scuole medie superiori ho visto usarle solo nella [geometria cartesiana dello spazio]{.text-red} e nelle [equazioni differenziali alle derivate parziali]{.text-red} in qualche istituto tecnico, invece sono molto usate nel primo biennio delle università soprattutto per lo studio di superfici e di solidi

In pratica occorre focalizzare l'attenzione su una variabile per volta considerando l'altra come una costante:
ad esempio considero la funzione:

$$
\textcolor{red}{z = x^5 + 4x^4y - 3xy^4 + 6y^5}
$$

La sua derivata prima rispetto ad $x$ (devo considerare $y$ come una costante) sarà

$$
\textcolor{red}{\frac{\partial z}{\partial x} = 5x^4 + 16x^3y - 3y^4}
$$

mentre la derivata prima rispetto ad $y$ sarà

$$
\textcolor{red}{\frac{\partial z}{\partial y} = 4x^4 - 12xy^3 + 30y^4}
$$

[se hai bisogno di vedere i calcoli nei particolari](cfg1.html)

Una cosa da tener presente è che le derivate miste fatte con le stesse variabili e gli stessi passaggi sono uguali, cioè

$$
\textcolor{red}{\frac{\partial^3 z}{\partial x^2 \partial y} = \frac{\partial^3 z}{\partial x \partial y \partial x} = \frac{\partial^3 z}{\partial y \partial x^2}}
$$

Ponendo

$$
\textcolor{red}{\partial x^2 = \partial x \cdot \partial x}
$$

Cioè se derivo prima due volte rispetto ad $x$ e poi derivo rispetto ad $y$ ottengo lo stesso risultato che otterrei derivando prima rispetto ad $x$ poi ad $y$ poi ancora rispetto ad $x$ oppure derivando prima rispetto ad $y$ e poi due volte rispetto ad $x$.