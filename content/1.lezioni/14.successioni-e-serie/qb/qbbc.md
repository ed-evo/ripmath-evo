# Costruzione di una progressione geometrica dati due termini

Vediamo, su un esempio, come procedere per costruire una progressione geometrica conoscendone due termini.
Supponiamo di conoscere il terzo termine $$a_3 = 12$$ ed anche il settimo termine $$a_7 = 192$$.

Per ottenere il settimo termine partendo dal terzo devo moltiplicare il terzo per la ragione per 4 volte $$(7-3)$$, quindi, per ottenere la ragione basterà ragionare alla rovescia:
cioè per ottenere la ragione divido il settimo termine per il terzo e poi eseguo la radice quarta di tale differenza, quindi:

$$
q^4 = 192 : 12 = 16
$$

Quindi (siccome $$2^4$$ fa $$16$$) posso scrivere:

$$
q = \sqrt[4]{16} = 2
$$

Quindi la ragione è $$2$$ e la mia progressione è:
$$3, 6, 12, 24, 48, 96, 192, \dots$$

***

Adesso facciamo lo stesso ragionamento con due termini generici, in modo da avere la formula generale.

Supponiamo di conoscere i termini $$a_k$$ ed $$a_n$$, essendo $$n > k$$.
Allora per ottenere $$a_n$$ partendo da $$a_k$$, dovrò moltiplicare tale termine per la ragione $$q$$ elevata a $$(n-k)$$:

$$
a_n = a_k \cdot q^{(n-k)}
$$

Adesso tratto tale uguaglianza come un'equazione: devo trovare $$q$$.

$$
q^{(n-k)} = \frac{a_n}{a_k}
$$

Estraggo la radice:

$$
q = \sqrt[n-k]{\frac{a_n}{a_k}}
$$

Vale quindi la formula:

$$
\textcolor{red}{q = \sqrt[n-k]{\frac{a_n}{a_k}}}
$$

***

> **Esempio:**
> Dato il sesto termine $$a_6 = 1$$ ed il dodicesimo termine $$a_{12} = 1/729$$ di una progressione geometrica, trovare i primi 10 termini.
>
> Applico la formula:
>
> $$
> q = \sqrt[n-k]{\frac{a_n}{a_k}} = \sqrt[6]{\frac{1/729}{1}} = \sqrt[6]{\frac{1}{729}} = \sqrt[6]{\frac{1}{3^6}} = \frac{1}{3}
> $$
>
> Nel quarto passaggio ho scomposto in fattori il termine $$729$$ e semplificato la radice con l'esponente, quindi la ragione è $$q = \frac{1}{3}$$.
>
> Costruisco i termini della progressione:
>
> - Per ottenere il quinto termine divido il sesto termine per la ragione: $$a_5 = 1 : \frac{1}{3} = 1 \cdot 3 = 3$$
> - Per ottenere il quarto termine divido il quinto termine per la ragione: $$a_4 = 3 : \frac{1}{3} = 3 \cdot 3 = 9$$
> - Per ottenere il terzo termine divido il quarto termine per la ragione: $$a_3 = 9 : \frac{1}{3} = 9 \cdot 3 = 27$$
> - Per ottenere il secondo termine divido il terzo termine per la ragione: $$a_2 = 27 : \frac{1}{3} = 27 \cdot 3 = 81$$
> - Per ottenere il primo termine divido il secondo termine per la ragione: $$a_1 = 81 : \frac{1}{3} = 81 \cdot 3 = 243$$
>
> Invece per ottenere il settimo termine moltiplico il sesto termine per la ragione: $$a_7 = 1 \cdot \frac{1}{3} = \frac{1}{3}$$
> - Per ottenere l'ottavo termine moltiplico il settimo termine per la ragione: $$a_8 = \frac{1}{3} \cdot \frac{1}{3} = \frac{1}{9}$$
> - Per ottenere il nono termine moltiplico l'ottavo termine per la ragione: $$a_9 = \frac{1}{9} \cdot \frac{1}{3} = \frac{1}{27}$$
> - Per ottenere il decimo termine moltiplico il nono termine per la ragione: $$a_{10} = \frac{1}{27} \cdot \frac{1}{3} = \frac{1}{81}$$
>
> Quindi la mia progressione, fino al decimo termine, è:
>
> $$
> 243, 81, 27, 9, 3, 1, \frac{1}{3}, \frac{1}{9}, \frac{1}{27}, \frac{1}{81}
> $$