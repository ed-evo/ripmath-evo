# [Operazioni interne]{.text-red}

Prima di procedere approfondiamo un poco il concetto di operazione.
Se vuoi far contento il tuo Prof. puoi indicarla, in linguaggio erudito, come legge di composizione.
Vedi anche la pagina in [aritmetica](../../b/ba/bac.html).

Intuitivamente un'operazione è qualunque cosa che applicata ad uno o più oggetti li trasforma in qualcosa.

Sono applicazioni:
- nell'insieme dei numeri interi l'opposto di un numero: $\text{opposto}(+3) = -3$
- nell'insieme dei numeri naturali la somma di due numeri: $\text{somma}(3, 4) = 3 + 4 = 7$
- nei libri di fiabe il bacio di una principessa: $\text{bacio di principessa}(\text{rospo}) = \text{principe}$
- l'applicazione identica trasforma un qualunque oggetto in se stesso: $\text{identità}(a) = a$

Come prima cosa distinguiamo le applicazioni a seconda del numero di oggetti su cui operano: avremo
- **Operazione unaria** se applicata su un oggetto restituisce un oggetto
- **Operazione binaria** se applicata su due oggetti restituisce un oggetto
- **Operazione ternaria** se applicata su tre oggetti restituisce un oggetto

Inoltre potremo distinguere le applicazioni che trasformano oggetti di un insieme in un elemento dello stesso insieme (**interne**) e le applicazioni che trasformano oggetti di un insieme in un elemento di un altro insieme (**non interne**).

> **Esempi**
> nell'insieme dei numeri naturali la somma è un'operazione binaria interna, mentre la differenza no (basta che esista almeno un elemento che non appartenga e l'operazione è detta non interna)
> $3 + 2 = 5$ interna
> $5 - 3$ non si può fare in $\mathbb{N}$ quindi non interna
> Nell'insieme dei numeri razionali privati dello zero $\mathbb{Q} \setminus \{0\}$ l'operazione di inverso è un'operazione unaria interna, mentre non lo è nell'insieme dei numeri interi
> in $\mathbb{Q} \setminus \{0\} \text{ inv}(2/3) = 3/2$
> in $\mathbb{N} \text{ inv}(3)$ non esiste
> 
> **Esercizio per rilassarsi:** nell'insieme di rospi il bacio di una principessa è un'operazione interna?
> risposta: solamente se il principe è molto, molto, molto brutto

A noi interessano, per l'algebra di Boole, 3 operazioni, tutte e tre interne:

la prima operazione unaria: **passaggio al complementare** che indicheremo con l'apostrofo $'$

due operazioni binarie:
- una l'indicheremo come **somma** (attenzione! è diversa dalla somma che conosciamo) e, nelle seguenti pagine di teoria useremo il simbolo $\oplus$, poi nella pratica useremo semplicemente il $+$
- l'altra l'indicheremo come **prodotto** (attenzione! è diversa dal prodotto che conosciamo) e, nelle seguenti pagine di teoria, useremo il simbolo $\otimes$, poi nella pratica useremo semplicemente il $\cdot$, e, dove non ci saranno possibilità di errori, lo sottointenderemo