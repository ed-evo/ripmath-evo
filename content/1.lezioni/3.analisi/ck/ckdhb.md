# Tipi di frazioni elementari

Le funzioni razionali si possono pensare come somma di $$4$$ tipi fondamentali di frazioni elementari, dipendenti dalle radici che possiamo ottenere eguagliando a zero i denominatori e quindi dipendenti dalle radici dei denominatori stessi (in accordo con il [teorema fondamentale dell'algebra](../../a/af/afda.html):

Le radici possono essere:
1. Reali e distinte
2. Reali e coincidenti
3. Complesse e coniugate semplici
4. Complesse e coniugate multiple

Avremo:

1. per ogni radice reale distinta dovremo considerare il fattore
   $$
   \textcolor{blue}{\frac{A}{x - x_1}}
   $$
   Essendo $$A$$ ($$B$$, $$C$$, ...) una costante da determinare ed $$x_1$$ la radice.

2. per ogni radice reale di molteplicità, ad esempio $$3$$, dovremo considerare contemporaneamente i fattori
   $$
   \textcolor{blue}{\frac{A}{x - x_1} + \frac{B}{(x - x_1)^2} + \frac{C}{(x - x_1)^3}}
   $$
   Essendo $$A$$, $$B$$, $$C$$ costanti da determinare ed $$x_1$$ la radice reale multipla (nel nostro caso le tre soluzioni coincidenti).

3. per ogni coppia di radici complesse e coniugate dovremo considerare il fattore
   $$
   \textcolor{blue}{\frac{Ax + B}{x^2 + px + q}}
   $$
   Essendo $$A$$ e $$B$$ costanti da determinare ed $$x^2 + px + q$$ l'espressione con radici complesse e coniugate.

4. Se le stesse radici complesse e coniugate sono multiple, come ad esempio in $$(x^2 + px + q)^3$$ ove ci sono $$3$$ coppie di radici complesse e coniugate, dovremo considerare contemporaneamente i fattori:
   $$
   \textcolor{blue}{\frac{Ax + B}{x^2 + px + q} + \frac{Cx + D}{(x^2 + px + q)^2} + \frac{Ex + F}{(x^2 + px + q)^3}}
   $$
   Essendo $$A$$, $$B$$, $$C$$, $$D$$, $$E$$, $$F$$ costanti da determinare.

Nelle pagine seguenti vedremo come ogni funzione razionale si possa trasformare nella somma di queste funzioni elementari e vedremo che ognuna di queste funzioni ha il proprio integrale.