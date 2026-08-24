# [Perché i logaritmi]{.text-red}

Premesso che, al giorno d'oggi con l'utilizzo delle calcolatrici l'uso dei logaritmi ha perso quasi tutta la sua importanza, fino a $50$ anni fa i logaritmi erano quasi l'unico modo di poter risolvere certe espressioni e certi calcoli.
Prima di essi si utilizzavano le formule di Prostaferesi in trigonometria, con un ben maggior cumulo di operazioni per poter risolvere i vari problemi, tanto che un astronomo commentò che Nepero, considerato l'inventore dei logaritmi, aveva regalato loro metà della loro vita (dedicata quasi completamente ai calcoli astronomici).

Se vuoi approfondire, per le proprietà cui facciamo riferimento puoi seguire questi link:
- [operazioni sulle potenze](../../a/aa/aa.html)
- [radicali in forma esponenziale](../../a/ak/akg.html)
- [proprietà dei logaritmi](../../a/al/alg.html)

***

Scriviamo l'uguaglianza:

$$
\textcolor{red-darken-1}{10^3 = 1000}
$$

il logaritmo $3$ è l'esponente della potenza e quindi per esso valgono le proprietà viste per gli esponenti di potenza, ad esempio:

Il prodotto fra due potenze di stessa base è ancora una potenza che ha per base la stessa base e per esponente la somma degli esponenti.
Se ora devo fare il prodotto fra due numeri e riesco a metterli in forma di potenza a base $10$, invece di fare il prodotto potrò fare la somma degli esponenti per ottenere il risultato.

***

> **Esempio:** Ti faccio un esempio ovvio con numeri banali, però quello che conta è il metodo che potremo applicare a tutti i numeri.
> 
> $$
> 10.000 \times 100.000 =
> $$
> Trasformo in potenza di $10$ ($4$ e $5$):
> $$
> 10^4 \times 10^5 =
> $$
> Sommo gli esponenti ($4+5=9$):
> $$
> 10^9 =
> $$
> Ritrovo il numero sviluppando la potenza ($10^9 = 1.000.000.000$):
> $$
> 1.000.000.000
> $$
> 
> Cioè noi passeremo dai numeri agli esponenti, eseguiremo le operazioni richieste e, trovato il risultato come esponente, troveremo poi il numero di cui esso è logaritmo.

***

Ti elenco qui di seguito le proprietà dei logaritmi decimali (e dei logaritmi in generale):

- Il logaritmo di un prodotto è uguale alla somma dei logaritmi dei fattori:
  $$
  \log(a \cdot b) = \log a + \log b
  $$
  ($10^a \cdot 10^b = 10^{a+b}$) trasforma un prodotto in somma. [link](../../a/aa/aa2.html)

- Il logaritmo di un quoziente è uguale alla differenza dei logaritmi del numeratore e del denominatore:
  $$
  \log(a/b) = \log a - \log b
  $$
  ($10^a / 10^b = 10^{a-b}$) trasforma un quoziente in differenza. [link](../../a/aa/aa3.html)

- $$
  \log a^b = b \log a
  $$
  ($(10^a)^b = 10^{a \cdot b}$) trasforma una potenza in prodotto. [link](../../a/aa/aa4.html)

- $$
  \log \sqrt[n]{a} = \frac{1}{n} \log a
  $$
  ($\sqrt[n]{10^a} = 10^{a/n}$) trasforma una radice in divisione. [link](../../a/ak/akg.html)

***

Come vedi, i logaritmi ti danno la possibilità di eseguire operazioni che da molto difficili diventeranno abbastanza semplici.