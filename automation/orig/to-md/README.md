# tomd

Basic batch processing of HTML into Markdown.

Using LLM-on-demand via `genai` requires minimal local resources and runs comfortably on lightweight hardware like the Raspberry Pi Zero. 

*Note: Requires rate-limit tuning (especially when using free tier API plans).*

---

## Output Synchronization

To sync the generated output files from the Raspberry Pi to your local machine using `rsync` over SSH:

```bash
rsync -avzP <user>@<pi_ip_address>:~/ripmat/output/ ./output/

```