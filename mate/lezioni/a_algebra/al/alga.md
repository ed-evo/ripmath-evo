# Logaritmo di un prodotto

---

[Regola:]{.text-purple} Il logaritmo di un prodotto è uguale alla somma dei logaritmi dei singoli fattori

$$
\log_a(b \cdot c) = \log_a b + \log_a c
$$

---

Deriva dalla regola del prodotto di due potenze aventi la stessa base infatti, ricordando che il logaritmo è l'esponente abbiamo

$$
a^x \cdot a^y = a^{x+y}
$$

poniamo

$$
x = \log_a b
$$

$$
y = \log_a c
$$

allora per definizione di logaritmo abbiamo

$$
a^x = a^{\log_a b} = b
$$

$$
a^y = a^{\log_a c} = c
$$

moltiplicando fra loro le due relazioni otteniamo

$$
a^x \cdot a^y = b \cdot c
$$

e, per la regola delle potenze

$$
a^{x+y} = b \cdot c
$$

ma allora per la definizione di logaritmo si ha

$$
x + y = \log_a(b \cdot c)
$$

quindi sostituendo ad $x$ ed $y$ i loro valori avremo la formula finale

$$
\log_a b + \log_a c = \log_a(b \cdot c)
$$

---

Quindi se dobbiamo fare un prodotto piuttosto complicato possiamo trasformare i fattori in logaritmi, farne la somma e poi fare l'antilogaritmo per trovarne il risultato.

Facciamo un esempio molto banale, tanto per vedere il metodo: useremo i logaritmo in base $2$ anche se, di solito, per questi calcoli si usano i logaritmi decimali o di Briggs cioè a base $10$.

---

> Voglio calcolare
> [$16 \cdot 64 =$]{.text-blue}
> Trasformo in logaritmi, ad esempio in base $2$
> [$\log_2 16 = 4$]{.text-red} $\quad$ [$\log_2 64 = 6$]{.text-red}
> faccio la somma
> [$4 + 6 = 10$]{.text-red}
> questo è il logaritmo del risultato, per trovare il risultato devo metterlo come esponente alla base
> [$2^{10} = 1024$]{.text-red}
> quindi
> [$16 \cdot 64 = 1024$]{.text-blue}

---