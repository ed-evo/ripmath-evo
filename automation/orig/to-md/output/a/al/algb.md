# [Logaritmo di un quoziente]{.text-red}

---

[**Regola:**]{.text-purple} Il logaritmo di un quoziente è uguale alla differenza dei logaritmi dei singoli fattori

$$
\textcolor{blue}{\log_a \frac{b}{c} = \log_a b - \log_a c}
$$

---

Deriva dalla regola del quoziente di due potenze aventi la stessa base; infatti, ricordando che il logaritmo è l'esponente abbiamo:

$$
\textcolor{blue}{\frac{a^x}{a^y} = a^{x-y}}
$$

poniamo:

$\textcolor{blue}{x = \log_a b}$
$\textcolor{blue}{y = \log_a c}$

allora per definizione di logaritmo abbiamo:

$$
\textcolor{blue}{a^x = a^{\log_a b} = b}
$$
$$
\textcolor{blue}{a^y = a^{\log_a c} = c}
$$

dividendo fra loro le due relazioni otteniamo:

$$
\textcolor{blue}{\frac{a^x}{a^y} = \frac{b}{c}}
$$

e, per la regola del quoziente di due potenze:

$$
\textcolor{blue}{a^{x-y} = \frac{b}{c}}
$$

ma allora per la definizione di logaritmo si ha:

$$
\textcolor{blue}{x - y = \log_a \left( \frac{b}{c} \right)}
$$

quindi sostituendo ad $x$ ed $y$ i loro valori avremo la formula finale:

$$
\textcolor{blue}{\log_a b - \log_a c = \log_a \frac{b}{c}}
$$

---

una conseguenza notevole e che useremo spesso è:

$$
\textcolor{blue}{-\log_a b = \log_a \frac{1}{b}}
$$

---

Quindi se dobbiamo fare un quoziente piuttosto complicato possiamo trasformare i fattori in logaritmi, farne la differenza e poi fare l'antilogaritmo per trovarne il risultato.

Anche qui facciamo un esempio molto banale, tanto per vedere il metodo: useremo i logaritmi in base $2$ anche se, di solito, per questi calcoli si usano i logaritmi decimali o di Briggs cioè a base $10$.

---

Voglio calcolare:
$\textcolor{blue}{1024 : 64}$

Trasformo in logaritmi, nel nostro caso in base $2$:
$\textcolor{red}{\log_2 1024 = 10 \quad \log_2 64 = 6}$

faccio la differenza:
$\textcolor{red}{10 - 6 = 4}$

questo è il logaritmo del risultato; per trovare il risultato devo metterlo come esponente alla base:
$\textcolor{red}{2^4 = 16}$

quindi:
$\textcolor{blue}{1024 : 64 = 16}$

---