# Dipendenza ed indipendenza lineare

Consideriamo alcune equazioni:

$$
\textcolor{blue}{x + y + z = 6}
$$
$$
\textcolor{blue}{2x + 2y + 2z = 12}
$$
$$
\textcolor{blue}{x - y + z = 2}
$$

Diremo che due equazioni sono tra loro **linearmente dipendenti** se è possibile trasformare la prima nella seconda moltiplicando o dividendo tutti i termini per lo stesso numero:

$$
\textcolor{red}{\text{prima equazione} = k \cdot (\text{seconda equazione})}
$$

Nell'esempio la prima e la seconda sono tra loro linearmente dipendenti perché ottengo la seconda moltiplicando ogni termine della prima per $$2$$. Anche se non è molto esatto proviamo a rappresentarlo così:

$$
\textcolor{red}{2 \cdot (x + y + z = 6) \Rightarrow (2 \cdot x + 2 \cdot y + 2 \cdot z = 2 \cdot 6) \Rightarrow 2x + 2y + 2z = 12}
$$

Due equazioni sono tra loro **linearmente indipendenti** se non è possibile trasformare la prima nella seconda moltiplicando o dividendo tutti i termini per lo stesso numero. Ad esempio la prima e la terza sono tra loro linearmente indipendenti e non sono trasformabili una nell'altra: basta guardare i segni: moltiplicando non posso trasformare quattro segni positivi in tre positivi ed un negativo.

> **Nota:** La nozione di dipendenza lineare è fondamentale in tutti quegli oggetti matematici che hanno delle componenti ben definite, come le coordinate di un punto, le componenti di un vettore, i termini di un polinomio ordinato, e qui, le equazioni a più incognite perché ci permette di capire quando due oggetti sono effettivamente diversi e non possono diventare uguali e quando, invece, possono diventare uguali.

Per quello che ora ci interessa sui sistemi possiamo affermare che:

- se le equazioni sono fra loro linearmente dipendenti allora le matrici completa ed incompleta avranno entrambe delle righe uguali o proporzionali
- se il sistema ammette una sola soluzione allora le equazioni componenti sono fra loro linearmente indipendenti (non vale il viceversa)