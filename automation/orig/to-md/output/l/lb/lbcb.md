[# Combinazioni con ripetizione]{.text-red}

Le combinazioni con ripetizione $$\textcolor{red}{C^*_{n;}}$$ di $$n$$ oggetti sono le coppie, terne, quaterne, ... $$k$$-uple non ordinate che posso formare considerando che ogni oggetto può essere considerato più volte.

Come esempio vediamo quali sono le combinazioni con ripetizione di classe $$3$$ (terne) sui $$4$$ oggetti $$\textcolor{red}{a, b, c, d}$$.

Devo fare tutte le terne non ordinate possibili anche ripetendo gli oggetti; sono:

> Nella prima riga ho messo le combinazioni semplici
> Nella prima colonna ho aggiunto quelle con due $$a$$ e con tre $$a$$
> Nella seconda colonna ho aggiunto quelle con due $$b$$ e con tre $$b$$
> Nella terza colonna ho aggiunto quelle con due $$c$$ e con tre $$c$$
> Nella quarta colonna ho aggiunto quelle con due $$d$$ e con tre $$d$$

$$\textcolor{red}{a\ b\ c \quad a\ b\ d \quad a\ c\ d \quad b\ c\ d}$$
$$\textcolor{red}{a\ a\ a \quad b\ b\ a \quad c\ c\ a \quad d\ d\ a}$$
$$\textcolor{red}{a\ a\ b \quad b\ b\ b \quad c\ c\ b \quad d\ d\ b}$$
$$\textcolor{red}{a\ a\ c \quad b\ b\ c \quad c\ c\ c \quad d\ d\ c}$$
$$\textcolor{red}{a\ a\ d \quad b\ b\ d \quad c\ c\ d \quad d\ d\ d}$$

Quindi

$$\textcolor{red}{C^*_{4;3} = 20}$$

Visto che le combinazioni con ripetizione vengono usate raramente per ora mi limito a fornire la formula, rimandando la dimostrazione ad una seconda stesura.

$$
\textcolor{red}{C^*_{n;k} = \frac{n \cdot (n+1) \cdot \dots \cdot (n+k-1)}{k!}}
$$