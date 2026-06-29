Set-Location 'c:\Users\Lais C\OneDrive\Desktop\Todo_projetos\aulaTeste'
npm test | Tee-Object -FilePath test_output.txt
Write-Host "Tests completed - output saved to test_output.txt"
