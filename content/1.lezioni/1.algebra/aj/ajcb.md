# Calcolo del determinante col metodo di Laplace

Il determinante di ordine $$1$$ corrisponde al numero stesso

$$
\textcolor{red}{| a_{1,1} | = a_{1,1}}
$$

Se ora vado a rivedere come calcolavo il determinante nel caso di un sistema di due equazioni in due incognite posso dire:

$$
\textcolor{red}{\begin{vmatrix} a_{1,1} & a_{1,2} \\ a_{2,1} & a_{2,2} \end{vmatrix} = a_{1,1} \cdot a_{2,2} - a_{1,2} \cdot a_{2,1} = a_{1,1} \cdot C_{1,1} - a_{1,2} \cdot C_{1,2}}
$$

Cioè moltiplico il primo elemento della prima riga per il suo complemento e moltiplico il secondo elemento della prima riga per il suo complemento e faccio la differenza.

Posso anche dire:
**Sommo ogni termine della prima riga moltiplicato per il suo complemento algebrico**

> Controlla come esercizio che è indifferente se sviluppi utilizzando gli elementi della seconda riga, della prima colonna od anche della seconda colonna: ottieni sempre lo stesso risultato

Estendiamo il metodo ad un determinante $$3 \times 3$$

$$
\textcolor{red}{\begin{vmatrix} a_{1,1} & a_{1,2} & a_{1,3} \\ a_{2,1} & a_{2,2} & a_{2,3} \\ a_{3,1} & a_{3,2} & a_{3,3} \end{vmatrix}}
$$

Sviluppo secondo la prima riga (è indifferente sviluppare secondo una qualsiasi riga o colonna) mettendo il segno positivo se la somma degli indici dell'elemento è pari ed il segno negativo se la somma degli indici dell'elemento è dispari.

Meglio dire:
**Sommo ogni termine di una riga (o colonna) moltiplicato per il suo complemento algebrico**

$$
\textcolor{red}{\begin{vmatrix} a_{1,1} & a_{1,2} & a_{1,3} \\ a_{2,1} & a_{2,2} & a_{2,3} \\ a_{3,1} & a_{3,2} & a_{3,3} \end{vmatrix} = + a_{1,1} \cdot C_{1,1} - a_{1,2} \cdot C_{1,2} + a_{1,3} \cdot C_{1,3}}
$$

> se vuoi vedere come calcolare il segno dei complementi algebrici fai click sopra i segni stessi

e quindi abbiamo

$$
\textcolor{red}{\begin{vmatrix} a_{1,1} & a_{1,2} & a_{1,3} \\ a_{2,1} & a_{2,2} & a_{2,3} \\ a_{3,1} & a_{3,2} & a_{3,3} \end{vmatrix} = a_{1,1} \cdot \begin{vmatrix} a_{2,2} & a_{2,3} \\ a_{3,2} & a_{3,3} \end{vmatrix} - a_{1,2} \cdot \begin{vmatrix} a_{2,1} & a_{2,3} \\ a_{3,1} & a_{3,3} \end{vmatrix} + a_{1,3} \cdot \begin{vmatrix} a_{2,1} & a_{2,2} \\ a_{3,1} & a_{3,2} \end{vmatrix}}
$$

> Se vuoi vedere un esempio numerico di calcolo di un determinante $$3 \times 3$$

Questo metodo sarà applicabile per ricorrenza anche a determinanti $$4 \times 4$$, $$5 \times 5$$, ....

Regola generale (sviluppo secondo l'$$h$$-sima riga)

$$
\textcolor{red}{\begin{vmatrix} a_{1,1} & a_{1,2} & \dots & a_{1,k} & \dots & a_{1,n} \\ a_{2,1} & a_{2,2} & \dots & a_{2,k} & \dots & a_{2,n} \\ \vdots & \vdots & \ddots & \vdots & \ddots & \vdots \\ a_{h,1} & a_{h,2} & \dots & a_{h,k} & \dots & a_{h,n} \\ \vdots & \vdots & \ddots & \vdots & \ddots & \vdots \\ a_{n,1} & a_{n,2} & \dots & a_{n,k} & \dots & a_{n,n} \end{vmatrix}}
$$

$$
\textcolor{red}{= a_{h,1} (-1)^{h+1} C_{h,1} + a_{h,2} (-1)^{h+2} C_{h,2} + \dots + a_{h,k} (-1)^{h+k} C_{h,k} + \dots + a_{h,n} (-1)^{h+n} C_{h,n}}
$$

> ti ricordo che i termini $$(-1)^{h+k}$$ forniscono il segno del complemento algebrico e valgono $$+1$$ quando l'esponente è pari mentre valgono $$-1$$ quando l'esponente è dispari

Inoltre posso scegliere una qualunque riga o colonna per sviluppare; quindi, per rendere i calcoli più semplici, se possibile, sceglierò una riga o una colonna dove vi sono termini uguali a zero.

esempio di calcolo di un determinante $$4 \times 4$$
esempio di calcolo di un determinante $$5 \times 5$$

Essendo i calcoli generalmente molto laboriosi vedremo nella prossima pagina delle proprietà che ci permetteranno di trasformare un determinante in altri equivalenti ma con righe o colonne con elementi nulli.