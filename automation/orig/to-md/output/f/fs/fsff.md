# [Cenni sul problema della ciclotomia]{.text-red}

> Certo che è una parolona difficile! Ma vuol semplicemente dire divisione della circonferenza (dal greco ciclos cerchio e tome tagliare)

Il problema di come fare a suddividere la circonferenza in archi uguali equivale alla costruzione dei poligoni regolari inscritti.

Intanto intuitivamente possiamo dire che se abbiamo un poligono inscritto possiamo sempre costruire il poligono con un numero doppio di lati semplicemente dividendo a metà l'arco di cui il lato è una corda.
Quindi sapendo costruire il quadrato inscritto possiamo costruire l'ottagono regolare inscritto, il poligono con $$16$$ lati, il poligono con $$32$$ lati, ...

Sapendo costruire l'esagono regolare (fare link al capitolo costruzioni con riga e compasso) possiamo costruire il dodecagono regolare, il poligono con $$24$$ lati...

Invece ad esempio il poligono con $$7$$ lati (ettagono regolare) non è costruibile esattamente solo con riga e compasso.

Comunque, agli inizi del $$1800$$ il matematico Gauss ha dato una formula che permette di sapere quali sono i poligoni regolari inscritti che possono essere costruiti in modo esatto con riga e compasso:

**Un poligono regolare di $$n$$ lati (con $$n$$ diverso da $$2$$) è costruibile con riga e compasso se e solo se il numero $$n$$ è dato dalla formula**

$$
n = 2^{m}(2^{a}+1) \cdot (2^{b}+1) \cdot (2^{c}+1) \cdot \dots \cdot (2^{p}+1)
$$

**dove $$m \ge 0$$**
**e dove i numeri $$2^{h}+1$$ sono numeri primi diversi fra loro**

Un numero del tipo **$$2^{a}+1$$** è primo solamente se **$$a$$** è una potenza del $$2$$ cioè se è del tipo **$$2^{2^{k}}+1$$**, quindi, teoricamente, costruibili con riga e compasso sono i poligoni regolari di lati $$3, 5, 17, 257, \dots$$ ed i loro multipli (ma non ho visto mai nessuno, su un foglio, superare i $$20$$ lati).

> Ho scritto "$$n$$ numero diverso da $$2$$" perché possiamo pensare come poligono regolare di $$2$$ lati una coppia di diametri coincidenti che, suddividendo gli archi a metà, daranno luogo ai poligoni di $$4, 8, 16, 32, 64, \dots$$ lati