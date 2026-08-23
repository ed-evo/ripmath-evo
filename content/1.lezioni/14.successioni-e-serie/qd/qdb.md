# [Definizione]{.text-red}

Chiamiamo **ridotta** di una successione la somma dei termini della successione sino ad un termine definito.

Esempio: l'insieme
$$
a_1+a_2+a_3+a_4
$$
è la ridotta di ordine $$4$$ della successione
$$
a_1, a_2, a_3, \dots, a_n, \dots
$$

Consideriamo una qualunque successione di numeri reali
$$
a_1, a_2, a_3, \dots, a_n, \dots
$$
consideriamo le ridotte
$$
s_1 = a_1
$$
$$
s_2 = a_1+a_2
$$
$$
s_3 = a_1+a_2+a_3
$$
$$
\dots
$$
$$
s_n = a_1+a_2+a_3+\dots+a_n
$$
$$
\dots
$$
La successione delle ridotte
$$
s_1, s_2, s_3, \dots, s_n, \dots
$$
si chiama serie numerica.

Naturalmente è possibile, data la serie, "ritrovare" la successione generatrice; cioè:
Data la serie
$$
s_1, s_2, s_3, \dots, s_n, \dots
$$
la successione generatrice sarà
$$
s_1, s_2-s_1, s_3-s_2, \dots, s_n-s_{n-1}, \dots
$$

infatti, avremo:
$$
s_1 = a_1
$$
$$
s_2-s_1 = a_2+a_1 -a_1 = a_2
$$
$$
s_3-s_2 = a_3+a_2+a_1 - (a_2+a_1) = a_3+a_2+a_1 - a_2-a_1 = a_3
$$
$$
\dots
$$
$$
s_n-s_{n-1} = a_n+ a_{n-1}+a_{n-2}+ \dots +a_3+a_2+a_1 - (a_{n-1}+ a_{n-2}+ \dots +a_3+a_2+a_1) = a_n+ a_{n-1}+a_{n-2}+ \dots +a_3+a_2+a_1 - a_{n-1}-a_{n-2}- \dots -a_3-a_2-a_1 = a_n
$$
$$
\dots
$$

Diremo che una serie $$s_k$$ converge (o converge semplicemente) se converge la successione delle sue ridotte
$$
s_1, s_2, s_3, \dots, s_n, \dots
$$
Se la serie
$$
a_1+a_2+a_3+a_4+\dots
$$
converge allora il limite $$s$$ si chiama anche somma della serie e vale
$$
s = a_1+a_2+a_3+\dots +a_n+\dots
$$
che indicheremo anche come
$$
s = \sum_{n=1}^{\infty} a_n
$$
se invece la serie diverge positivamente o negativamente avremo
$$
\sum_{n=1}^{\infty} a_n = \pm\infty
$$

In pratica quindi una serie non è altro che una successione e si potrebbero studiare concettualmente le serie come successioni, ma ormai è nella tradizione studiare le serie come enti autonomi e presentare alcuni teoremi come teoremi sulle serie ed altri come teoremi sulle successioni ed altri ancora nella doppia forma.

Come esempio vediamo un teorema sulle serie che ci fornisce un teorema sulle successioni.
Per il teorema generale di convergenza delle successioni avremo che, se la serie $$s_n$$ converge (essendo una successione applico il criterio di convergenza di Cauchy) si ha
$$
\lim_{n \to \infty} |s_n-s_{n-1}| = 0
$$
quindi, visto che, per l'osservazione sulle successioni generatrici, vale
$$
s_n-s_{n-1} = a_n
$$
otteniamo
$$
\lim_{n \to \infty} a_n = 0
$$
cioè il termine generale $$a_n$$ di una successione che genera una serie numerica convergente è infinitesimo al divergere di $$n$$.

> **Nota:** la condizione è necessaria, ma non sufficiente, cioè se la serie è convergente il termine generico è infinitesimo, ma non vale sempre il viceversa: esistono successioni con termine generico infinitesimo che danno luogo a serie divergenti.