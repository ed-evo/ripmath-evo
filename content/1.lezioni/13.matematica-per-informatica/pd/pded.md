# Porte logiche come disposizioni con ripetizione

Prima di procedere diamo uno sguardo d'insieme alle possibili porte logiche che derivano da due fili percorsi o meno da corrente: indicando con $$0$$ il non passaggio di corrente e con $$1$$ il passaggio di corrente notiamo che si tratta di disposizioni con ripetizione di $$2$$ oggetti ($$0$$ e $$1$$) presi $$4$$ a $$4$$, cioè con $$2$$ proposizioni avremo per le porte logiche $$16$$ possibilità ($$D'_{2,4} = 2^4 = 16$$).

> La stessa cosa abbiamo fatto in logica: se vuoi vedere i $$16$$ possibili casi in logica.

Nella seguente tabella elenco le $$16$$ possibilità; chiamo:
- $$\text{a}$$ primo filo
- $$\text{b}$$ secondo filo

| $$\text{a}$$ | $$\text{b}$$ | $$\text{T}$$ | $$a+b$$ | $$a+b'$$ | $$à+b$$ | $$(a \cdot b)'$$ | $$\text{a}$$ | $$\text{b}$$ | $$(a \cdot b') + (à \cdot b)$$ | $$(a \cdot b) + (à \cdot b')$$ | $$b'$$ | $$à$$ | $$a \cdot b$$ | $$a \cdot b'$$ | $$à \cdot b$$ | $$(a+b)'$$ | $$\text{C}$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $$0$$ | $$0$$ | $$1$$ | $$0$$ | $$1$$ | $$1$$ | $$1$$ | $$0$$ | $$0$$ | $$0$$ | $$1$$ | $$1$$ | $$1$$ | $$0$$ | $$0$$ | $$0$$ | $$1$$ | $$0$$ |
| $$0$$ | $$1$$ | $$1$$ | $$1$$ | $$0$$ | $$1$$ | $$1$$ | $$0$$ | $$1$$ | $$1$$ | $$0$$ | $$0$$ | $$1$$ | $$0$$ | $$0$$ | $$1$$ | $$0$$ | $$0$$ |
| $$1$$ | $$0$$ | $$1$$ | $$1$$ | $$1$$ | $$0$$ | $$1$$ | $$1$$ | $$0$$ | $$1$$ | $$0$$ | $$1$$ | $$0$$ | $$0$$ | $$1$$ | $$0$$ | $$0$$ | $$0$$ |
| $$1$$ | $$1$$ | $$1$$ | $$1$$ | $$1$$ | $$1$$ | $$0$$ | $$1$$ | $$1$$ | $$0$$ | $$1$$ | $$0$$ | $$0$$ | $$1$$ | $$0$$ | $$0$$ | $$0$$ | $$0$$ |

Se fermi il mouse sulle colonne in basso della tabella potrai leggere il nome del circuito presente in quella colonna.

Da notare che applicando le leggi di dualità è possibile dare più "etichette" ad una stessa colonna: alcune "etichette" sono in forma normale disgiuntiva completa, tipo ad esempio $$(a \cdot b') + (à \cdot b)$$, altre no, ad esempio $$(a+b)'$$ non è in forma disgiuntiva completa.

> ### Importante!
>
> Osserva nelle prime due colonne $$\text{a}$$ e $$\text{b}$$ e considera gli $$1$$ come variabili e gli $$0$$ come i loro complementari; allora hai che in ogni colonna ottieni la porta scritta nella forma normale disgiuntiva:
>
> Infatti in ogni colonna:
> - il primo termine corrisponderà ad $$àb'$$ ($$a=0, b=0$$)
> - il secondo termine corrisponderà ad $$àb$$ ($$a=0, b=1$$)
> - il terzo termine corrisponderà ad $$ab'$$ ($$a=1, b=0$$)
> - il quarto termine corrisponderà ad $$ab$$ ($$a=1, b=1$$)
>
> Infatti:
> - nella tautologia hai $$1, 1, 1, 1$$ che puoi tradurre come $$àb' + àb + ab' + ab$$
> - nella somma $$a+b$$ hai $$0, 1, 1, 1$$ che puoi tradurre come $$àb + ab' + ab$$
> - nell'implicazione diretta $$a+b'$$ hai $$1, 0, 1, 1$$ che puoi tradurre come $$àb' + ab' + ab$$
>
> la contraddizione (ultima colonna) non ha rappresentazione.
>
> **[Nelle porte logiche a due ingressi la forma normale disgiuntiva rappresenta tutti gli stati possibili degli ingressi di un circuito che danno come uscita il valore 1]{.text-red}**

Non so se lo stesso risultato sia valido anche per circuiti a più ingressi. Comunque per alcune porte (per esercizio) troveremo la forma normale disgiuntiva completa anche in modo algebrico.

Da notare anche che per ogni porta esiste la porta complementare (basta che nella colonna vengano scambiati $$0$$ e $$1$$).

Tutto questo con $$2$$ ingressi $$\text{a}$$ e $$\text{b}$$, cioè:

$$
2^{2^2} = 2^4 = 16 \text{ circuiti possibili}
$$

Se avessi $$3$$ ingressi $$\text{a}$$, $$\text{b}$$ e $$\text{c}$$ allora avrei:

$$
2^{2^3} = 2^8 = 256 \text{ circuiti possibili}
$$

Con $$4$$ ingressi $$\text{a}$$, $$\text{b}$$, $$\text{c}$$ e $$\text{d}$$ avrei:

$$
2^{2^4} = 2^{16} = 65.536 \text{ circuiti possibili}
$$