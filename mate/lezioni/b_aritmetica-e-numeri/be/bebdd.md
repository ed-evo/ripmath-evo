# Coordinate polari nello spazio

Facciamo un breve cenno sulle coordinate polari nello spazio.

Considero il sistema cartesiano ortogonale $Oxyz$ e considero il punto $P$ di coordinate $(x; y; z)$.

Ho:
$OK = z \quad OA = x \quad OB = y$

Congiungo il punto $P$ con l'origine degli assi $O$ ed ottengo
$PO = \rho$

$\rho$ è l'ipotenusa del triangolo $POH$ che ha i cateti che valgono $PH = z$ e $OH = \sqrt{x^2 + y^2}$, quindi vale la relazione:

$$
\rho = \sqrt{x^2 + y^2 + z^2}
$$

Considero ora il triangolo rettangolo $POH$, in esso avremo valide le relazioni:

$z = OK = PH = \rho \sin \phi$

$OH = \sqrt{x^2 + y^2} = \rho \cos \phi$

E quindi per trovare $x$ ed $y$, considerando il triangolo rettangolo $OHA$:

$x = OA = OH \sin \theta = \rho \cos \phi \cos \theta$

$y = AB = AH = OH \cos \theta = \rho \cos \phi \sin \theta$

Quindi avremo le tre formule di trasformazione da coordinate cartesiane a coordinate polari:

- $x = \rho \cos \phi \cos \theta$
- $y = \rho \cos \phi \sin \theta$
- $z = \rho \sin \phi$

Viceversa avremo per le trasformazioni da coordinate polari a coordinate cartesiane:

- Per la relazione sul triangolo $OAH$, essendo $\tan \theta = \frac{AH}{OA}$:
  $$
  \tan \theta = \frac{y}{x}
  $$
- Per la relazione sul triangolo $POH$, essendo $\tan \phi = \frac{PH}{OH}$:
  $$
  \tan \phi = \frac{z}{\sqrt{x^2 + y^2}}
  $$
- $$
  \rho = \sqrt{x^2 + y^2 + z^2}
  $$