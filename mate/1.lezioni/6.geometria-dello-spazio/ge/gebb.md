#[Criterio di perpendicolarità fra una retta e un piano]{.text-red}

**Una retta è perpendicolare ad un piano se è perpendicolare a due rette diverse del piano passanti per il punto di incontro fra la retta ed il piano**

Il criterio dice che basterà mostrare che la retta è perpendicolare a due rette diverse del piano per essere perpendicolare a tutte le rette del piano passanti per il punto d'incontro.

Per dimostrarlo mostriamo che se la retta è perpendicolare a due rette diverse passanti per il punto d'incontro allora è perpendicolare anche ad una terza retta passante per il punto (e quindi a tutte le rette passanti per il punto d'incontro).

[**Ipotesi:** $$a \perp b$$, $$a \perp c$$, $$b \neq c$$]{.text-blue}
[**Tesi:** $$\exists d$$ passante per $$P$$ tale che $$a \perp d$$]{.text-blue}

> **Dimostrazione:** Sulla retta $$a$$ che taglia il piano nel punto $$P$$ si considerano due punti equidistanti da $$P$$ da bande opposte rispetto al piano $$a$$: $$A$$ ed $$A'$$; si considerino il punto $$B$$ sulla retta $$b$$ ed il punto $$C$$ sulla retta $$c$$, si congiungano $$B$$ e $$C$$ con $$A$$ ed $$A'$$. Considero il triangolo $$\triangle BAA'$$: esso è isoscele perché la sua altezza $$BP$$ è anche mediana essendo $$PA = PA'$$ per costruzione, pertanto $$AB = A'B$$; considerando il triangolo $$\triangle CAA'$$ con la stessa dimostrazione ottengo $$CA = CA'$$.
> 
> Congiungo $$C$$ con $$B$$ e considero ora i triangoli $$\triangle CAB$$ e $$\triangle CA'B$$, essi hanno:
> - $$CB$$ in comune
> - $$AB = A'B$$ perché dimostrato
> - $$AC = A'C$$ perché dimostrato
> 
> quindi i due triangoli sono congruenti per il terzo criterio di congruenza ed in particolare avrò che l'angolo $$\angle ABC$$ è uguale all'angolo $$\angle A'BC$$.
> 
> Considero ora una retta $$d$$ passante per $$P$$, basterà dimostrare che tale retta è perpendicolare ad $$a$$; la retta $$d$$ incontrerà il segmento $$BC$$ (od un suo prolungamento) nel punto $$D$$; congiungo $$D$$ con $$A$$ ed $$A'$$ e considero i triangoli $$\triangle ABD$$ ed $$\triangle A'BD$$, essi hanno:
> - $$AB = A'B$$ perché già visto prima
> - $$BD$$ in comune
> - l'angolo $$\angle ABC$$ uguale all'angolo $$\angle A'BC$$ perché già dimostrato
> 
> quindi i due triangoli sono congruenti per il primo criterio di congruenza, in particolare avremo $$AD = A'D$$. Considero ora il triangolo $$\triangle ADA'$$, esso è isoscele perché ha due lati $$AD$$ ed $$A'D$$ uguali ed essendo $$DP$$ mediana per la proprietà dei triangoli isosceli sarà anche altezza, cioè $$DP$$ è perpendicolare alla retta $$a$$ come volevamo dimostrare.