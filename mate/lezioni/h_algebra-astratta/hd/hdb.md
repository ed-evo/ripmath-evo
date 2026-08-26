# Definizione di morfismo

Per dare la definizione matematica partiamo dall'esempio della pagina precedente:

$$
\begin{array}{ccccc}
\textcolor{red}{3} & \textcolor{red}{\times} & \textcolor{red}{2} & \textcolor{red}{=} & \textcolor{blue}{6} \\
\textcolor{red}{f \downarrow} & & \textcolor{red}{f \downarrow} & & \textcolor{blue}{\downarrow} \\
\textcolor{blue}{9} & \textcolor{blue}{\otimes} & \textcolor{blue}{4} & \textcolor{blue}{=} & \textcolor{blue}{36}
\end{array}
$$

ti ho evidenziato in blu la parte che conta: conta il fatto che trasformare mediante $f$ due termini e fare il prodotto $\otimes$ oppure trasformare il risultato dopo aver fatto il loro prodotto $\times$ dà sempre lo stesso risultato.

cioè, essendo $9 = f(3)$ e $4 = f(2)$ ed inoltre $6 = 3 \times 2$ abbiamo:

$$
f(3) \otimes f(2) = f(6) = f(3 \times 2)
$$

tolgo il termine al centro ed ottengo:

$$
\textcolor{red}{f(3) \otimes f(2) = f(3 \times 2)}
$$

Applichiamo adesso quanto visto al caso generale e diamo la definizione:

> **Date due strutture $(A, \times)$ e $(B, \otimes)$ dotate di due operazioni diverse $\times$ e $\otimes$ sugli insiemi $A$ e $B$ e data l'applicazione**
> **$f: A \rightarrow B$**
> **diremo che $f$ è un morfismo fra le due strutture se indicati con $a$ e $b$ due elementi qualunque dell'insieme $A$ e con $f(a)$ ed $f(b)$ gli elementi corrispondenti nell'insieme $B$ vale sempre:**
> $$
> \textcolor{red}{f(a) \otimes f(b) = f(a \times b)}
> $$

cioè, in breve, chiamando prodotto l'operazione generica:
**Il prodotto dei trasformati è uguale al trasformato del prodotto**

Naturalmente $\times$ e $\otimes$ sono simboli per due operazioni qualunque; sotto ti faccio un esempio usando la somma ed il prodotto.

***

**Esempio:**

Consideriamo le due strutture:
- $(N, +)$ cioè l'insieme dei numeri naturali con l'operazione di addizione
- $(2^N, \cdot)$ cioè l'insieme delle potenze del $2$ con esponente naturale con l'operazione di prodotto

e consideriamo l'applicazione:
$$
f: N \rightarrow 2^n \quad f(a) = 2^a
$$

Applichiamo la definizione per due elementi $a$ e $b$ di $N$:
$$
f(a) \cdot f(b) = f(a+b)
$$
$$
2^a \cdot 2^b = 2^{a+b}
$$

l'uguaglianza è valida (vedi le regole per il prodotto di potenze con la stessa base), quindi $f$ è un morfismo fra le due strutture (vedremo poi, su un esempio con base diversa, che è addirittura un isomorfismo).

***

> **Nota:** In alcuni testi ho visto utilizzare la stessa definizione per morfismo ed omomorfismo; siccome ogni docente ha un suo "gergo matematico", ti conviene sempre seguire le definizioni che ti dà il tuo docente.