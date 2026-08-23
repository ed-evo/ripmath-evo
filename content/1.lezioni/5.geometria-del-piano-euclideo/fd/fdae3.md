# Problema

[Sui lati dell'angolo $$A$$ si prendano due segmenti $$AB$$ ed $$AC$$ congruenti e, consecutivamente, altri due segmenti congruenti $$BD$$ e $$CE$$. Si unisca $$B$$ con $$E$$ e $$C$$ con $$D$$. Sia $$F$$ il punto di intersezione: dimostrare che la retta $$AF$$ è la bisettrice dell'angolo $$A$$.]{.text-blue}

---

Facciamo come negli esercizi precedenti (naturalmente lo faremo solo per i primi esercizi, poi, una volta diventati esperti, abbreveremo):

- Leggiamo con calma il testo cercando di capire bene tutti i termini
- Tracciamo una grande figura seguendo le indicazioni e segnando sulla figura stessa tutti gli elementi che sappiamo congruenti
- Scriviamo l'ipotesi e la tesi
- Partiamo dalla tesi e risaliamo fino ai dati
- Scriviamo lo stesso procedimento a rovescio (partiamo dall'ipotesi ed arriviamo alla tesi)

---

Mettendo assieme quanto visto nei punti precedenti abbiamo:

**Ipotesi**
- $$\textcolor{blue}{AB = AC}$$
- $$\textcolor{blue}{BD = CE}$$

**Tesi**
$$
\textcolor{blue}{\widehat{BAF} = \widehat{FAC}}
$$

Considero i triangoli $$\textcolor{red}{ADC}$$ ed $$\textcolor{red}{ABE}$$ (te li ho estratti dalla figura completa), essi hanno:
- $$\textcolor{red}{AC = AB}$$ per ipotesi
- $$\textcolor{red}{AD = AE}$$ perché somma di segmenti congruenti
- L'angolo $$\textcolor{red}{A}$$ in comune

Quindi i due triangoli sono congruenti per il primo criterio di congruenza ed in particolare saranno congruenti gli angoli $$\textcolor{red}{ADC = AEB}$$ e $$\textcolor{red}{ABE = ACD}$$.

(Ripeto la figura per farti seguire meglio il ragionamento)

Considero ora i triangoli $$\textcolor{red}{BFD}$$ e $$\textcolor{red}{CFE}$$, essi hanno:
- $$\textcolor{red}{BD = CE}$$ per ipotesi
- Gli angoli $$\textcolor{red}{BDF = CEF}$$ perché appena dimostrato
> **Nota:** Corrispondono agli angoli $$\textcolor{red}{ADC}$$ ed $$\textcolor{red}{AEB}$$.
- Gli angoli $$\textcolor{red}{FBD = FCE}$$ perché supplementari degli angoli congruenti $$\textcolor{red}{ABE = ACD}$$ come abbiamo appena dimostrato
> **Nota:** Supplementari vuol dire che con gli altri angoli formano un angolo piatto.

I due triangoli sono congruenti per il secondo criterio ed in particolare hanno congruenti i lati $$\textcolor{red}{BF = CF}$$.

Considero infine i triangoli $$\textcolor{red}{ABF}$$ e $$\textcolor{red}{ACF}$$, essi hanno:
- $$\textcolor{red}{AB = AC}$$ per ipotesi
- Gli angoli $$\textcolor{red}{A}$$ congruenti perché in comune
- $$\textcolor{red}{BF = CF}$$ perché appena dimostrato

Quindi i due triangoli sono congruenti per il terzo criterio ed in particolare avranno congruenti gli angoli $$\textcolor{red}{\widehat{BAF} = \widehat{FAC}}$$, cioè $$\textcolor{red}{AF}$$ è la bisettrice come volevamo dimostrare.

---