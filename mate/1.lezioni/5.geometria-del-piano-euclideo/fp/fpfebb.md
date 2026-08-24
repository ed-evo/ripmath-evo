# correggere

## Problema
Dato il triangolo $$ABC$$ si consideri la mediana $$AD$$. Per il punto $$E$$, preso su $$BC$$ si tracci la parallela ad $$AD$$ che interseca le rette $$AC$$ ed $$AB$$ nei punti $$F$$ e $$G$$.
Dimostrare che vale $$EF + EG = 2AD$$.

Costruiamo prima di tutto la figura.

> **Ipotesi:**
> $$BD = DC$$
> $$EG \parallel AD$$
>
> **Tesi:**
> $$EF + EG = 2AD$$

Essendo $$EG$$ parallela ad $$AD$$ si formano due coppie di triangoli simili; cioè:
- $$ABD$$ simile a $$GBE$$
- $$CFE$$ simile a $$CAD$$

Considero i triangoli $$ABD$$ e $$GBE$$, essi sono simili perché hanno l'angolo in $$B$$ in comune ed i due lati opposti a tale angolo paralleli.

> Il fatto di avere lati paralleli comporta sempre l'avere angoli congruenti

Quindi posso scrivere la proporzione:

$$
\textcolor{red}{BD : BE = AD : EG}
$$

Considero i triangoli $$CFE$$ e $$CAD$$, essi sono simili perché hanno l'angolo in $$C$$ in comune ed i due lati opposti a tale angolo paralleli.
Quindi posso scrivere la proporzione:

$$
\textcolor{red}{EC : CD = EF : AD}
$$

Ho quindi ottenuto le due proporzioni:

$$
BD : BE = AD : EG
$$

$$
EC : CD = EF : AD
$$

Nella prima applico la proprietà dell'invertire in modo da avere $$AD$$ come ultimo termine:

$$
BE : BD = EG : AD
$$

$$
EC : CD = EF : AD
$$

Essendo le proporzioni delle uguaglianze posso fare la somma termine a termine ed ottenere ancora una proporzione valida:

$$
\textcolor{blue}{BE : BD = EG : AD}
$$

$$
\textcolor{blue}{EC : CD = EF : AD}
$$

$$
\textcolor{blue}{(BE + EC) : (BD + CD) = (EG + EF) : (AD + AD)}
$$

Ma vale:
$$
BE + EC = BC
$$
$$
BD + CD = BC
$$

Quindi posso scrivere:

$$
BC : BC = (EG + EF) : 2AD
$$

Ed essendo uguali i primi due termini della proporzione, dovrebbero essere uguali fra loro anche il terzo ed il quarto termine, cioè:

$$
EG + EF = 2AD
$$

come volevamo dimostrare.