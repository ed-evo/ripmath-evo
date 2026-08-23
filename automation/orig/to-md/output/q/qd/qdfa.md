# [Proprietà distributiva di una serie numerica]{.text-red}

Considero la serie convergente a $$s$$

$$
s = a_1 + a_2 + a_3 + a_4 + \dots
$$

se considero la serie

$$
ca_1 + ca_2 + ca_3 + ca_4 + \dots
$$

essendo $$c$$ un numero dato, essa converge verso $$c \cdot s$$

> Chiamiamo, per ora $$h$$ la serie; per ogni sua ridotta posso scrivere
> $$h_1 = ca_1 = c \cdot s_1$$
> $$h_2 = ca_1 + ca_2 = c(a_1 + a_2) = c \cdot s_2$$
> $$h_3 = ca_1 + ca_2 + ca_3 = c(a_1 + a_2 + a_3) = c \cdot s_3$$
> $$h_4 = ca_1 + ca_2 + ca_3 + ca_4 = c(a_1 + a_2 + a_3 + a_4) = c \cdot s_4$$
> $$\dots$$
> quindi, d'ora in avanti, chiameremo tale serie $$cs$$

Possiamo inoltre dire che se $$c \neq 0$$ le serie $$s$$ e $$cs$$ hanno lo stesso carattere, cioè entrambe le serie convergono oppure divergono oppure sono indeterminate.

Quindi possiamo dire che, per le serie numeriche, sussiste la proprietà distributiva rispetto alla moltiplicazione per un numero, cioè

$$
c \cdot s = c(a_1 + a_2 + a_3 + a_4 + \dots) = ca_1 + ca_2 + ca_3 + ca_4 + \dots = cs
$$

> **Esempio:** studiare il carattere della serie
>
> $$
> \frac{3}{2} + \frac{3}{4} + \frac{3}{8} + \dots
> $$
>
> e, se converge, calcolarne il valore.
>
> Vista la proprietà distributiva sopra considerata, la nostra serie si può pensare come
>
> $$
> 3 \cdot \left( \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \dots \right)
> $$
>
> cioè come prodotto fra $$3$$ e la serie geometrica di ragione $$\frac{1}{2}$$ privata del primo termine, e la somma di questa serie vale $$1$$, quindi
>
> $$
> 3 \cdot \left( \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \dots \right) = 3
> $$
>
> Quindi la nostra serie converge e la sua somma vale $$3$$