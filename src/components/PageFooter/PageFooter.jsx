import './page-footer.css'

function PageFooter() {
  return (
    <>
       <footer>
		<a name="footer"></a>
		<div className="social" id="section-social">
			<ul>
				<div></div>
                <li>
					<a href="https://www.linkedin.com/in/marcos-vinicius-angeli-costa/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-linkedin" />
					</a>
				</li>
				<li>	
					<a href="https://api.whatsapp.com/send?phone=5549998266688&text=Ol%C3%A1,%20agradecemos%20pelo%20seu%20contato,%20em%20breve%20sua%20mensagem%20ser%C3%A1%20respondida!" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-whatsapp" />
					</a>
				</li>
				<li>	
					<a href="https://github.com/MarcosVinicius556" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github" />
					</a>
				</li>
				<div></div>
			</ul>
		</div>
		<p className="end">Copyright by Marcos Vinicius Angeli Costa.</p>
	</footer>
    </>
  )
}

export default PageFooter