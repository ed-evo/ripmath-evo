# [Primo teorema di Euclide]{.text-red}

**In ogni triangolo rettangolo il quadrato costruito su un cateto è equivalente ad un rettangolo avente per lati l'ipotenusa e la proiezione del cateto sull'ipotenusa**

Ho costruito il rettangolo prendendo $$\text{BC}'$$ congruente a $$\text{BC}$$.
$$\text{BH}$$ è la proiezione del cateto $$\text{AB}$$.
In pratica devo dimostrare che, se il triangolo è rettangolo, le due figure in azzurro, il quadrato $$\textcolor{blue}{Q}$$ ed il rettangolo $$\textcolor{blue}{R}$$, sono equivalenti.
Nei problemi sarà particolarmente importante la seguente forma del teorema:

$$
\text{AB}^2 = \text{BH} \cdot \text{BC}
$$

Poiché tale formula coinvolge $$3$$ quantità sarà sufficiente conoscerne $$2$$ per trovare la terza.
Passiamo alla dimostrazione.

> **Ipotesi:** $$\text{BAC}$$ triangolo rettangolo
> **Tesi:** $$\textcolor{red}{Q}$$ equivalente $$\textcolor{red}{R}$$

Per poter dimostrare il teorema costruiamo una figura intermedia: il parallelogramma $$\text{BFGA}$$; dimostreremo che il quadrato è equivalente al parallelogramma e poi che il parallelogramma è equivalente al rettangolo; per la proprietà transitiva dell'equivalenza seguirà la tesi.

- **Dimostriamo che il quadrato $$\text{ABDE}$$ è equivalente al parallelogramma $$\text{BFGA}$$**
  Le due figure hanno la stessa base $$\text{AB}$$.
  L'altezza del quadrato $$\text{EA}$$ è anche altezza per il parallelogramma (l'altezza è qualunque segmento di perpendicolare compreso fra i due lati paralleli di cui uno sia la base).

- **Dimostriamo ora che il parallelogramma $$\text{BFGA}$$ è equivalente al rettangolo $$\text{BC}'\text{KH}$$**
  Intanto le due figure hanno la stessa altezza perché possiamo considerare come altezza qualunque segmento di perpendicolare condotto fra le rette parallele $$\text{FC}'$$ e $$\text{GK}$$.
  Dobbiamo dimostrare che hanno anche basi congruenti, cioè che $$\text{FB} = \text{BC}'$$.
  Siccome $$\text{BC}'$$ è stato costruito congruente all'ipotenusa $$\text{BC}$$, dimostriamo che $$\text{FB} = \text{BC}$$.
  Per dimostrarlo consideriamo i triangoli $$\text{ABC}$$ e $$\text{DBF}$$, essi hanno:
    - $$\widehat{\text{BAC}} = \widehat{\text{BDF}}$$ perché entrambi angoli retti: uno per ipotesi e l'altro perché angolo di un quadrato.
    - $$\text{DB} = \text{AB}$$ perché lati di un quadrato.
    - $$\widehat{\text{DBF}} = \widehat{\text{ABC}}$$ perché complementari dello stesso angolo $$\widehat{\text{FBA}}$$, cioè se li sommo con l'angolo $$\widehat{\text{FBA}}$$ ottengo da entrambi un angolo retto.

  Quindi i due triangoli sono congruenti per il secondo criterio di congruenza ed in particolare avremo che $$\text{BF} = \text{BC}$$.
  Il parallelogramma ed il rettangolo hanno quindi anche congruente la base e pertanto sono equivalenti.

Allora il quadrato $$\textcolor{red}{Q}$$ è equivalente al parallelogramma $$\textcolor{red}{P}$$ e quest'ultimo è equivalente al rettangolo $$\textcolor{red}{R}$$; quindi, per la proprietà transitiva dell'equivalenza, $$\textcolor{red}{Q}$$ è equivalente ad $$\textcolor{red}{R}$$ come volevamo.

***

In lettere scriveremo:

> **$$\text{AB}^2 = \text{BH} \cdot \text{BC}$$**